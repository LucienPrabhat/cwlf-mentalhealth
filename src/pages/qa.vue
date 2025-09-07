<template>
    <div class="qa-page">
        <h1>常見問答 Q&A</h1>
        <div class="qa-cards">
            <QaCard :index="1" title="為什麼有<br>「青春不該emo一樣｜兒少療心計畫」？">
                <p>
                    我們希望減少情緒困擾對兒少的影響，提供可近性的支持與資源，
                    讓孩子們能在安全的環境中表達與成長。
                </p>
            </QaCard>
            <QaCard :index="2" title="我的捐款會使用在哪裡呢？">
                <p>
                    我們希望減少情緒困擾對兒少的影響，提供可近性的支持與資源，
                    讓孩子們能在安全的環境中表達與成長。
                </p>
            </QaCard>
            <QaCard :index="3" title="我可以如何支持這個計畫？">
                <p>
                    我們希望減少情緒困擾對兒少的影響，提供可近性的支持與資源，
                    讓孩子們能在安全的環境中表達與成長。
                </p>
            </QaCard>
            <QaCard :index="4" title="目前哪些地區有這樣的服務？">
                <p>
                    我們希望減少情緒困擾對兒少的影響，提供可近性的支持與資源，
                    讓孩子們能在安全的環境中表達與成長。
                </p>
            </QaCard>
            <QaCard :index="5" title="我可以指定捐給某一個孩子嗎？">
                <p>
                    我們希望減少情緒困擾對兒少的影響，提供可近性的支持與資源，
                    讓孩子們能在安全的環境中表達與成長。
                </p>
            </QaCard>
            <QaCard :index="6" title="請問何時能收到捐款收據呢？">
                <p>
                    我們希望減少情緒困擾對兒少的影響，提供可近性的支持與資源，
                    讓孩子們能在安全的環境中表達與成長。
                </p>
            </QaCard>
            <QaCard :index="7" title="請問何時能收到捐款回饋品呢？">
                <p>
                    我們希望減少情緒困擾對兒少的影響，提供可近性的支持與資源，
                    讓孩子們能在安全的環境中表達與成長。
                </p>
            </QaCard>
            <QaCard :index="8" title="請問捐款回饋品活動會持續到何時呢？">
                <p>
                    我們希望減少情緒困擾對兒少的影響，提供可近性的支持與資源，
                    讓孩子們能在安全的環境中表達與成長。
                </p>
            </QaCard>
            <QaCard :index="9" title="我需要心理健康相關協助，<br>請問我可以找誰幫忙？">
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
