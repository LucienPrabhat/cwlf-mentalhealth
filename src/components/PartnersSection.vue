<template>
    <section :class="$style.partners">
        <div :class="$style.partnersInner">
            <div :class="$style.partnerLabel">
                <p :class="$style.p">響應夥伴</p>
            </div>
            <div :class="$style.partnerStrip">
                <img v-for="(file, idx) in partnerIconFiles" :key="file" :class="$style.partnerIcon"
                    :src="`/partnerIcon/${file}`" :alt="`partner-${idx + 1}`" />
            </div>
            <div :class="$style.partnerNames">
                <p v-for="(name, idx) in partnerNames" :key="name" :class="$style.partnerName" :alt="`partner-${name}`">
                    {{ name }}
                </p>
            </div>
        </div>
    </section>

</template>

<script setup>
const partnerIconFiles = [
    '01.png',
    '02.png',
    '03.jpg',
    '04.png',
    '05.png',
    '06.png',
    '07.png',
    '08.png',
    '09.png',
    '10.png',
    '11.jpg',
    '12.png',
    '13.jpg',
    '14.jpg',
    '15.jpg',
    '16.png',
    '17.jpg',
    '18.jpg',
    '19.jpg',
    '20.jpg',
    '21.jpg',
    '22.jpg',
    '23.png',
    '24.png',
    '25.png',
    '26.jpg',
    '27.jpg',
    '28.jpg',
    '29.jpg',
    '30.jpg',
    '31.jpg',
    '32.jpg',
    '33.png',
    '34.jpg',
    '35.jpg',
    '36.jpg',
    '37.png',
    '38.png',
    '39.png',
    '40.png',
    '41.jpg',
    '42.PNG'
]

const partnerNames = [
    "桃園市基國派部落公共事務發展關懷協會",
    "桃園市八德區茄明社區發展協會",
    "嘉義縣西羅亞全人關懷協會",
    "高雄市桃源區高中社區發展協會",
    "臺東縣巴喜告原住民關懷協會",
    "南投縣原民樸溯永續發展協會",
    "台灣兒童發展協會",
    "花蓮縣撒種者關懷協會",
    "社團法人嘉義縣聽語多重障礙福利協進會",
    "高雄市大樹區統嶺社區發展協會",
    "宜蘭縣生命樹全人發展協會",
    "FLAVOR HUALIEN文化推廣工作室",
    "彰化縣埔鹽鄉埔鹽社區發展協會",
    "社團法人彰化縣梅鑒霧全人關懷協會",
    "新竹縣尖石鄉那山麻谷社會福利發展協會",
    "彰化縣竹塘鄉竹塘社區發展協會",
    "澎湖縣社會福利關懷協會",
    "新北市新住民全能教育學苑發展協會",
    "社團法人中華牧人關懷協會-馬賽城南小屋",
    "宜蘭縣員山鄉內城社區發展協會",
    "社團法人彰化縣秀水鄉馬興社區發展協會",
    "台東美蘭探索體驗學堂",
    "嘉義縣竹崎鄉鹿滿社區發展協會",
    "嘉義市東區興仁社區發展協會",
    "苗栗縣在地文化推廣協會",
    "社團法人越南故事書屋協會",
    "花蓮縣鄉村社區大學發展協會",
    "新竹縣北埔鄉南埔社區發展協會",
    "社團法人臺中市天恩社區關懷協會"
]
</script>

<style module>
.p {
    margin: 0;
}

.partners {
    width: 100%;
    max-width: 1440px;
    display: flex;
    align-items: center;
    justify-content: center;
    box-sizing: border-box;
}

.partnersInner {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 5vh 1vw;
    box-sizing: border-box;
}

.partnerLabel {
    white-space: nowrap;
    font-size: clamp(16px, 3vw, 32px);
}

.partnerStrip {
    width: 100%;
    display: grid;
    grid-template-columns: repeat(12, minmax(0, 1fr));
    align-items: center;
    justify-items: center;
    gap: 5px;
    padding: 3vh 1vw 5vh;
}

.partnerIcon {
    width: auto;
    height: auto;
    max-height: 56px;
    max-width: 100%;
    object-fit: contain;
}

.partnerNames {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    width: 100%;
    flex-wrap: wrap;
    padding: 0 1vw 5vh;
}

.partnerName {
    font-size: clamp(12px, 3vw, 16px);
    font-weight: 300;
    color: var(--color-cadetblue-300);
    width: 25%;
    margin-bottom: 10px;
    text-align: left;
}
</style>
