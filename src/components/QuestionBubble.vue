<template>
    <div :class="$style.wrapper" :style="wrapperStyle">
        <div :class="$style.bubble" :style="bubbleStyle">
            <div :class="$style.content" :style="contentStyle">
                <template v-if="props.text">
                    {{ displayText }}
                </template>
                <slot v-else />
            </div>
        </div>
        <div :class="$style.tail" :style="tailStyle"></div>
    </div>

</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
    width: { type: [String, Number], default: '25vw' },
    maxWidth: { type: [String, Number], default: '35vw' },
    minWidth: { type: [String, Number], default: '200px' },
    padding: { type: String, default: '10%' },
    background: { type: String, default: '#ffffff' },
    textColor: { type: String, default: 'var(--color-cadetblue-300)' },
    fontSize: { type: [String, Number], default: 'clamp(12px, 4vw, 24px)' },
    lineHeight: { type: [String, Number], default: 1.5 },
    text: { type: String, default: '' },
})

const toCssSize = (v) => typeof v === 'number' ? `${v}px` : String(v)

const wrapperStyle = computed(() => ({
    maxWidth: toCssSize(props.maxWidth),
    minWidth: toCssSize(props.minWidth),
}))

const bubbleStyle = computed(() => ({
    background: props.background,
}))

const contentStyle = computed(() => ({
    padding: props.padding,
    color: props.textColor,
    fontSize: toCssSize(props.fontSize),
    lineHeight: typeof props.lineHeight === 'number' ? String(props.lineHeight) : props.lineHeight,
}))

const tailStyle = computed(() => ({
    borderTopColor: props.background,
}))

const displayText = computed(() => {
    const t = props.text || ''
    return t.length > 50 ? `${t.slice(0, 50)}...` : t
})
</script>

<style module>
.wrapper {
    position: relative;
    display: inline-flex;
    align-items: center;
    justify-content: center;
}

.bubble {
    border-radius: 9999px;
    box-shadow: 0 0 8px rgba(0, 0, 0, 0.08);
}

.content {
    text-align: center;
    word-break: break-word;
    font-size: clamp(12px, 3vw, 16px);
    font-weight: 100;
    position: relative;
    letter-spacing: 0.04em;
    line-height: 100%;
    text-transform: uppercase;
    text-shadow: 0px 0px 3px #fff;
}

.tail {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    bottom: -8px;
    width: 0;
    height: 0;
    border-left: 8px solid transparent;
    border-right: 8px solid transparent;
    border-top: 8px solid #ffffff;
    filter: drop-shadow(0 -1px 2px rgba(0, 0, 0, 0.05));
}
</style>
