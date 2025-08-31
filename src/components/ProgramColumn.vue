<template>
    <section :class="$style.programColumn">
        <div :class="$style.icon">
            <img :alt="iconAlt" :src="iconSrc" />
        </div>
        <div :class="$style.content">
            <div :class="$style.title">
                <template v-if="titleHref">
                    <a :href="titleHref" :class="$style.titleLink">
                        <span v-html="title"></span>
                    </a>
                </template>
                <template v-else>
                    <span v-html="title"></span>
                </template>
            </div>
            <slot />
        </div>
    </section>
</template>

<script setup>
const props = defineProps({
    iconSrc: { type: String, required: true },
    iconAlt: { type: String, default: '' },
    title: { type: String, required: true },
    titleHref: { type: String, default: '' },
})
</script>

<style module>
.programColumn {
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    padding: 0px var(--padding-4);
    gap: 5%;
}

.icon {
    width: 10%;
}

.icon img {
    width: 100%;
}

.content {
    width: 90%;
    align-self: stretch;
}

.title {
    font-size: clamp(16px, 3vw, 20px);
    line-height: 200%;
}

.titleLink {
    color: inherit;
    text-decoration: underline;
}
</style>
