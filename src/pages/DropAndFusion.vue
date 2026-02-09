<!--
SPDX-FileCopyrightText: syuilo and misskey-project
SPDX-License-Identifier: AGPL-3.0-only
-->

<template>
<Transition
	:enterActiveClass="$style.transition_zoom_enterActive"
	:leaveActiveClass="$style.transition_zoom_leaveActive"
	:enterFromClass="$style.transition_zoom_enterFrom"
	:leaveToClass="$style.transition_zoom_leaveTo"
	:moveClass="$style.transition_zoom_move"
	mode="out-in"
>
	<div v-if="!gameStarted" class="_spacer" style="--MI_SPACER-w: 800px;">
		<div :class="$style.root">
			<div class="_gaps">
				<div class="_woodenFrame" style="text-align: center;">
					<div class="_woodenFrameInner">
						<img src="/client-assets/drop-and-fusion/logo.png" style="display: block; max-width: 100%; max-height: 200px; margin: auto;"/>
					</div>
				</div>
				<div class="_woodenFrame" style="text-align: center;">
					<div class="_woodenFrameInner">
						<div class="_gaps" style="padding: 16px;">
							<MkSelect v-model="gameMode" :items="gameModeDef">
							</MkSelect>
							<MkButton primary gradate large rounded inline @click="start">{{ i18n.ts.start }}</MkButton>
						</div>
					</div>
					<div class="_woodenFrameInner">
						<div class="_gaps" style="padding: 16px;">
							<div style="font-size: 90%;"><Icon name="music" /> {{ i18n.ts.soundWillBePlayed }}</div>
							<MkSwitch v-model="mute">
								<template #label>{{ i18n.ts.mute }}</template>
							</MkSwitch>
						</div>
					</div>
				</div>
				<div class="_woodenFrame">
					<div class="_woodenFrameInner" style="padding: 16px;">
						<div style="font-weight: bold;">{{ i18n.ts._bubbleGame.howToPlay }}</div>
						<ol>
							<li>{{ i18n.ts._bubbleGame._howToPlay.section1 }}</li>
							<li>{{ i18n.ts._bubbleGame._howToPlay.section2 }}</li>
							<li>{{ i18n.ts._bubbleGame._howToPlay.section3 }}</li>
						</ol>
					</div>
				</div>
				<div class="_woodenFrame">
					<div class="_woodenFrameInner">
						<div class="_gaps_s" style="padding: 16px;">
							<div><b>Credit</b></div>
							<div>
								<div>Ai-chan illustration: @poteriri@misskey.io</div>
								<div>BGM: @ys@misskey.design</div>
								<div>Modify: @leonxie@catpost.link</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
	<XGame v-else :gameMode="gameMode" :mute="mute" @end="onGameEnd"/>
</Transition>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import XGame from '@/pages/DropAndFusionGame.vue';
import MkButton from '@/components/MkButton.vue';
import { i18n } from '@/i18n';
import MkSelect from '@/components/MkSelect.vue';
import MkSwitch from '@/components/MkSwitch.vue';
import Icon from '@/components/Icon.vue';

const gameModeDef = [
	{ label: 'NORMAL', value: 'normal' },
	{ label: 'SQUARE', value: 'square' },
	{ label: 'YEN', value: 'yen' },
	{ label: 'SWEETS', value: 'sweets' },
	// { label: 'SPACE', value: 'space' },
];
const gameMode = ref('normal');
const gameStarted = ref(false);
const mute = ref(false);

async function start() {
	gameStarted.value = true;
}

function onGameEnd() {
	gameStarted.value = false;
}
</script>

<style lang="scss" module>
.transition_zoom_move,
.transition_zoom_enterActive,
.transition_zoom_leaveActive {
	transition: opacity 0.5s cubic-bezier(0,.5,.5,1), transform 0.5s cubic-bezier(0,.5,.5,1) !important;
}
.transition_zoom_enterFrom,
.transition_zoom_leaveTo {
	opacity: 0;
	transform: scale(0.8);
}

.root {
	margin: 0 auto;
	max-width: 600px;
	user-select: none;

	* {
		user-select: none;
	}
}

</style>




