<template>
    <div class="qa-page">
        <h1>常見問答 Q&A</h1>
        <div class="qa-cards">
            <QaCard :index="1" title="為什麼有『青春不該EMO一樣』兒少療心計畫？">
                <p>
                    我們希望減少情緒困擾對兒少的影響，提供可近性的支持與資源，
                    讓孩子們能在安全的環境中表達與成長。
                </p>
            </QaCard>
            <QaCard :index="1" title="為什麼有『青春不該EMO一樣』兒少療心計畫？">
                <p>
                    我們希望減少情緒困擾對兒少的影響，提供可近性的支持與資源，
                    讓孩子們能在安全的環境中表達與成長。
                </p>
            </QaCard>
            <QaCard :index="1" title="為什麼有『青春不該EMO一樣』兒少療心計畫？">
                <p>
                    我們希望減少情緒困擾對兒少的影響，提供可近性的支持與資源，
                    讓孩子們能在安全的環境中表達與成長。
                </p>
            </QaCard>
            <QaCard :index="1" title="為什麼有『青春不該EMO一樣』兒少療心計畫？">
                <p>
                    我們希望減少情緒困擾對兒少的影響，提供可近性的支持與資源，
                    讓孩子們能在安全的環境中表達與成長。
                </p>
            </QaCard>
            <QaCard :index="1" title="為什麼有『青春不該EMO一樣』兒少療心計畫？">
                <p>
                    我們希望減少情緒困擾對兒少的影響，提供可近性的支持與資源，
                    讓孩子們能在安全的環境中表達與成長。
                </p>
            </QaCard>
            <QaCard :index="1" title="為什麼有『青春不該EMO一樣』兒少療心計畫？">
                <p>
                    我們希望減少情緒困擾對兒少的影響，提供可近性的支持與資源，
                    讓孩子們能在安全的環境中表達與成長。
                </p>
            </QaCard>
            <QaCard :index="1" title="為什麼有『青春不該EMO一樣』兒少療心計畫？">
                <p>
                    我們希望減少情緒困擾對兒少的影響，提供可近性的支持與資源，
                    讓孩子們能在安全的環境中表達與成長。
                </p>
            </QaCard>
            <QaCard :index="1" title="為什麼有『青春不該EMO一樣』兒少療心計畫？">
                <p>
                    我們希望減少情緒困擾對兒少的影響，提供可近性的支持與資源，
                    讓孩子們能在安全的環境中表達與成長。
                </p>
            </QaCard>
        </div>
    </div>
</template>

<script setup>
import QaCard from '../components/QaCard.vue'
</script>

<style scoped>
.qa-page {
    width: 100vw;
    height: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 0 auto;
    padding: 24px 16px;
    background-color: #FBF7F3;
}

.qa-page h1 {
    font-size: 28px;
    margin-bottom: 12px;
}

.qa-page p {
    color: #444;
}

.qa-cards {
    width: 100%;
    max-width: 960px;
    display: flex;
    flex-direction: column;
    gap: 12px;
}
</style>
