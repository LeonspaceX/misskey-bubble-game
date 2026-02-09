let audioCtx: AudioContext | null = null;
const buffers = new Map<string, AudioBuffer>();

function getContext(): AudioContext | null {
  if (audioCtx) return audioCtx;
  const Ctor = window.AudioContext || (window as any).webkitAudioContext;
  if (!Ctor) return null;
  audioCtx = new Ctor();
  return audioCtx;
}

export async function loadAudio(url: string): Promise<AudioBuffer | null> {
  if (buffers.has(url)) return buffers.get(url)!;
  const ctx = getContext();
  if (!ctx) return null;
  const res = await fetch(url);
  const arrayBuffer = await res.arrayBuffer();
  const buffer = await ctx.decodeAudioData(arrayBuffer);
  buffers.set(url, buffer);
  return buffer;
}

export function createSourceNode(
  buffer: AudioBuffer,
  options: { volume?: number; pan?: number; playbackRate?: number } = {},
) {
  const ctx = getContext();
  if (!ctx) return null;
  const source = ctx.createBufferSource();
  source.buffer = buffer;
  if (options.playbackRate != null) source.playbackRate.value = options.playbackRate;

  const gainNode = ctx.createGain();
  gainNode.gain.value = options.volume ?? 1;

  let lastNode: AudioNode = source;
  let panNode: StereoPannerNode | null = null;
  if (typeof options.pan === 'number' && 'createStereoPanner' in ctx) {
    panNode = ctx.createStereoPanner();
    panNode.pan.value = options.pan;
    lastNode.connect(panNode);
    lastNode = panNode;
  }

  lastNode.connect(gainNode);
  gainNode.connect(ctx.destination);

  return { soundSource: source, gainNode, panNode };
}

export async function playUrl(
  url: string,
  options: { volume?: number; pan?: number; playbackRate?: number } = {},
) {
  const buffer = await loadAudio(url);
  if (!buffer) return;
  const nodes = createSourceNode(buffer, options);
  if (!nodes) return;
  nodes.soundSource.start();
}
