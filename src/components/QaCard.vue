<template>
    <div class="qa-card" @click="toggleOpen">
        <div class="qa-card-header">
            <div class="qa-index">{{ index }}</div>
            <div class="qa-title" :title="plainTitle" v-html="title"></div>
            <img class="qa-arrow" :class="{ rotated: isOpen }" src="/icon-down-arrow-green.png" alt="toggle" />
        </div>
        <transition :css="false" @before-enter="beforeEnter" @enter="enter" @after-enter="afterEnter"
            @before-leave="beforeLeave" @leave="leave" @after-leave="afterLeave">
            <div v-show="isOpen" class="qa-content">
                <slot>
                    <p v-if="content">{{ content }}</p>
                </slot>
            </div>
        </transition>
    </div>

</template>

<script setup lang="ts">
import { ref, computed } from 'vue'

interface Props {
    index: string | number
    title: string
    content?: string
}

const props = defineProps<Props>()

const isOpen = ref(false)

function toggleOpen(): void {
    isOpen.value = !isOpen.value
}

// Expose for potential parent access if needed
defineExpose({ isOpen })

// Plain text for tooltip (strip any HTML like <br>)
const plainTitle = computed(() => props.title.replace(/<[^>]*>/g, ''))

// Height-based drawer transition hooks for smooth push layout
function beforeEnter(el: Element): void {
    const element = el as HTMLElement
    element.style.height = '0px'
    element.style.opacity = '0'
    element.style.overflow = 'hidden'
}

function enter(el: Element): void {
    const element = el as HTMLElement
    element.style.transition = 'height 250ms ease, opacity 200ms ease'
    // Force reflow before changing height
    void element.offsetHeight
    element.style.height = `${element.scrollHeight}px`
    element.style.opacity = '1'
}

function afterEnter(el: Element): void {
    const element = el as HTMLElement
    element.style.transition = ''
    element.style.height = 'auto'
    element.style.overflow = ''
}

function beforeLeave(el: Element): void {
    const element = el as HTMLElement
    element.style.height = `${element.scrollHeight}px`
    element.style.opacity = '1'
    element.style.overflow = 'hidden'
}

function leave(el: Element): void {
    const element = el as HTMLElement
    element.style.transition = 'height 250ms ease, opacity 200ms ease'
    // Force reflow before collapsing
    void element.offsetHeight
    element.style.height = '0px'
    element.style.opacity = '0'
}

function afterLeave(el: Element): void {
    const element = el as HTMLElement
    element.style.transition = ''
    element.style.overflow = ''
}
</script>

<style scoped>
.qa-card {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 12px;
}

.qa-card-header {
    min-width: 356px;
    width: 100%;
    max-width: 862px;
    min-height: 67px;
    height: auto;
    max-height: 96px;
    border-radius: 10px;
    background: #ffffff;
    display: flex;
    align-items: center;
    padding: 0 16px;
    gap: 16px;
    cursor: pointer;
}

.qa-index {
    font-size: 32px;
    font-weight: 700;
    color: #CBE099;
    line-height: 1;
}

.qa-title {
    flex: 1;
    font-size: 15px;
    color: #51613A;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}

/* Hide manual line breaks on desktop (v-html content needs deep selector) */
.qa-title :deep(br) {
    display: none;
}

.qa-arrow {
    max-width: 12px;
    width: 100%;
    max-height: 46px;
    height: auto;
    flex: 0 0 auto;
    transition: transform 0.2s ease;
}

.qa-arrow.rotated {
    transform: rotate(180deg);
}

.qa-content {
    min-width: 356px;
    width: 100%;
    max-width: 862px;
    padding: 12px 16px 16px 16px;
    color: #51613A;
    font-size: 15px;
    font-weight: 100;
    letter-spacing: 0.04em;
    line-height: 180%;
}

/* On mobile, allow line breaks (including <br>) and wrap */
@media (max-width: 450px) {
    .qa-card-header {
        gap: 8px;
    }

    .qa-title {
        white-space: normal;
        overflow: visible;
        text-overflow: clip;
    }

    /* Re-enable line breaks for mobile */
    .qa-title :deep(br) {
        display: inline;
    }
}

/* CSS-based classes removed in favor of JS hooks for precise height animation */
</style>
