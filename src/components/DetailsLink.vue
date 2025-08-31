<template>
    <div :class="$style.details">
        <a :class="$style.a" :href="href" :target="target">
            {{ text }}
        </a>
    </div>
</template>

<script setup>
const props = defineProps({
    href: { type: String, required: true },
    text: { type: String, required: true },
    target: { type: String, default: '_blank' },
})
</script>

<style module>
.details {
    font-size: clamp(12px, 3vw, 16px);
    align-self: stretch;
    display: flex;
    align-items: center;
    justify-content: flex-start;
}

.a {
    position: relative;
    text-decoration: underline;
    letter-spacing: 0.04em;
    line-height: 157.24%;
    text-transform: uppercase;
    color: inherit;
    display: inline;
    vertical-align: baseline;
}

.a::after {
    content: "";
    display: inline-block;
    width: 1em;
    height: 1em;
    margin-left: 5px;
    background: url('/icon-to-right.svg') no-repeat center / contain;
    vertical-align: -0.1em;
}
</style>
