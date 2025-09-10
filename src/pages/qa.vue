<template>
    <div class="qa-page">
        <h1>常見問答 Q&A</h1>
        <div class="qa-cards">
            <QaCard :index="1" title="為什麼有<br>「青春不該emo一樣｜兒少療心計畫」？">
                <p>
                    在台灣，平均每7天就有一個孩子自殺，近年自殺已成青少年十大死因第二名。 
                    兒福聯盟調查亦發現，逾五成國中生因對未來感到壓力，出現情緒困擾與失眠的
                    機率大幅提高。課業重擔、前途迷惘，讓心靈不堪重負。然而，僅不到一半青少年
                    願向家人傾訴，當缺乏理解與支持，他們只能獨自面對風暴。
                    兒盟長年關注孩童與青少年相關議題，並提供行之有年的免費兒童與青少年專線，
                    傾聽孩子的煩惱，也透過倡議行動持續關心兒少心理健康問題，
                    並於近年開辦了少年＋服務據點及青少年心理健康服務，
                    提供更即時的兒少心理健康服務。
                    <br><br>
                    在台灣，平均每7天就有一個孩子自殺，近年自殺已成青少年十大死因第二名。 
                    兒福聯盟調查亦發現，逾五成國中生因對未來感到壓力，出現情緒困擾與失眠的
                    機率大幅提高。課業重擔、前途迷惘，讓心靈不堪重負。然而，僅不到一半青少年
                    願向家人傾訴，當缺乏理解與支持，他們只能獨自面對風暴。
                </p>
            </QaCard>
            <QaCard :index="2" title="我的捐款會使用在哪裡呢？">
                <p>
                    您的捐款將會支持我們持續推動兒少心理健康的倡議工作，
                    如舉辦校園宣導、主題講座；
                    支持我們的少年服務據點持續推出各類專屬兒少的活動、課程方案，
                    也幫助我們能持續開展青少年心理健康服務，社工將透過穩定的訪視輔導、
                    資源媒合等方式，陪伴每個深受情緒困擾的孩子迎向天晴。 
                </p>
            </QaCard>
            <QaCard :index="3" title="我可以如何支持這個計畫？">
                <p>
                    您的捐款將會支持我們持續推動兒少心理健康的倡議工作，
                    如舉辦校園宣導、主題感謝您願意支持本計劃，兒盟現正募集1000位療心人。
                    您可透過捐款方式實際支持我們的倡議與服務工作，
                    或者可將本活動資訊分享給您的親友，邀請大家一起關注與支持兒少心理健康議題！
                    提供您以下捐款方式，衷心期盼您也能加入療心人的行列！
                </p>
                <br>
                <div>
                    <div>1</div>
                    <div>2</div>
                    <div>3</div>
                    <div>4</div>
                    <div>5</div>
                </div>
            </QaCard>
            <QaCard :index="4" title="目前哪些地區有這樣的服務？">
                <p>
                    兒盟提供的兒童與少年專線服務可接通來自全台兒少的心聲，
                    少年＋服務據點目前台中穩定運作，青少年心理健康服務目前已在台中及新竹地區開辦。
                    <br><br>
                    我們也期盼透過民眾持續的支持，未來能將服務拓展到更多縣市區域，接住各個角落的孩子。
                </p>
            </QaCard>
            <QaCard :index="5" title="我可以指定捐給某一個孩子嗎？">
                <p>
                    兒盟青少年心理健康服務目前正陪伴一百多位有情緒困擾的孩子努力度過內心風雨，
                    除了您在兒盟網站及社群上看到的個案故事，
                    仍有更多與他們有類似或更嚴重經驗與處境的兒少，
                    需要我們的支持與幫助，因此我們未提供指定捐助某個個案。
                    <br><br>
                    您的捐款我們將會謹慎使用於本服務中，依照每個孩子與家庭的所需，
                    給予他們各種適切的資源與協助。 
                </p>
            </QaCard>
            <QaCard :index="6" title="請問何時能收到捐款收據呢？">
                <p>
                    若您選擇單筆收據，自捐款完成入款日後30天內將收據寄出喔！
                </p>
            </QaCard>
            <QaCard :index="7" title="請問何時能收到捐款回饋品呢？">
                <p>
                    本計劃提供單次或定期捐款方案，凡透過本活動網站或兒盟官網線上進行捐款，
                    我們將提供相對的回饋贈品以示感謝。贈品於首次扣款後30個工作天，以宅配寄出。
                    <br><br>
                    註:捐款收據與回饋品將分開寄送，且贈品為隨機出貨，恕無法指定款式。
                </p>
            </QaCard>
            <QaCard :index="8" title="請問捐款回饋品活動會持續到何時呢？">
                <p>
                    回饋品活動將持續至2025/12/31，因每項回饋品數量有限，也可能提早贈送完畢，
                    贈送完畢之回饋品將會於官網標註「已贈完」。
                </p>
            </QaCard>
            <QaCard :index="9" title="我需要心理健康相關協助，<br>請問我可以找誰幫忙？">
                <div class="index9-content-row">
                    <div class="index9-content-row-icon">少年專線</div>
                    <div class="index9-content-row-txt">
                        <p>
                            服務時間：每週二到週六下午4:30-7:30
                            <span class="index9-content-row-desc">（國定例假日除外）</span>
                            <br>
                            專線電話：0800-001769
                        </p>
                    </div>
                </div>
                <div class="index9-content-row">
                    <div class="index9-content-row-icon">LINE@線上聊</div>
                    <div class="index9-content-row-txt">
                        <p>
                            在LINE搜尋 @youthplus_cwlf
                        </p>
                    </div>
                </div>
                <div class="index9-content-row">
                    <div class="index9-content-row-icon">創傷專線</div>
                    <div class="index9-content-row-txt">
                        <p>
                            服務時間：每週一至週五 9:00~17:00
                            <br>
                            專線電話：0800-250585（愛我理我幫我）
                        </p>
                    </div>
                </div>
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
    color: #51613A;
    font-size: clamp(15px, 4vw, 40px);
    font-weight: 700;
    letter-spacing: 0.05em;
    line-height: 150%;
    margin-bottom: 12px;
}

.qa-page p {
    color: #51613A;
}

.qa-cards {
    width: 100%;
    max-width: 960px;
    display: flex;
    flex-direction: column;
    gap: 12px;
}

.index9-content-row {
    width: 100%;
    height: 100%;
    padding: 12px 16px 16px 16px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 50px;
}

.index9-content-row-icon {
    min-width: 120px;
    width: 100%;
    max-width: 155px;
    min-height: 27px;
    height: 100%;
    max-height: 35px;
    border-radius: 50px;
    background-color: #CBE099;
    color: #51613A;
    text-align: center;
    font-size: 15px;
    font-weight: 100;
    letter-spacing: 0.04em;
    line-height: 180%;
}

.index9-content-row-desc {}

@media screen and (max-width: 450px) {
    .index9-content-row {
        flex-direction: column;
        align-items: flex-start;
        justify-content: flex-start;
        gap: 12px;
    }

    .index9-content-row-txt {
        padding: 0 8px;
    }

    .index9-content-row-desc {
        display: inline-block;
        margin-left: 5em;
        font-size: 13px;
    }
}
</style>
