<template>
    <div :class="$style.wrapper" :style="wrapperStyle">
        <div :class="$style.bubble" :style="bubbleStyle">
            <div :class="$style.content" :style="contentStyle">
                <slot />
            </div>
        </div>
        <div :class="$style.tail" :style="tailStyle"></div>
    </div>

</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
    maxWidth: { type: [String, Number], default: '360px' },
    minWidth: { type: [String, Number], default: '140px' },
    padding: { type: String, default: '14px 18px' },
    background: { type: String, default: '#ffffff' },
    textColor: { type: String, default: 'var(--color-cadetblue-300)' },
    fontSize: { type: [String, Number], default: '18px' },
    lineHeight: { type: [String, Number], default: 1.4 },
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
</script>

<style module>
.wrapper {
    position: relative;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 50%;
}

.bubble {
    border-radius: 9999px;
    box-shadow: 0 0 8px rgba(0, 0, 0, 0.08);
}

.content {
    font-weight: 600;
    text-align: center;
    word-break: break-word;
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
