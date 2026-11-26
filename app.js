(() => {
  const menus = {
    comfort: [
      {name:'소고기 미역국과 밥',emoji:'🍲',category:'따뜻한 집밥',time:'약 25분',ingredients:'미역 · 소고기 · 밥',tip:'속까지 따뜻하게 채워요',reason:'따뜻한 국물 한 숟갈이 마음까지 포근하게 감싸줄 거예요.'},
      {name:'계란 듬뿍 순두부찌개',emoji:'🥘',category:'얼큰한 위로',time:'약 20분',ingredients:'순두부 · 달걀 · 대파',tip:'밥 한 공기 곁들이기',reason:'보글보글 끓는 부드러운 순두부로 든든하게 충전해요.'},
      {name:'엄마표 김치볶음밥',emoji:'🍳',category:'추억의 한 그릇',time:'약 15분',ingredients:'김치 · 밥 · 달걀',tip:'반숙 달걀을 올려봐요',reason:'익숙하고 친근한 맛이 오늘의 기분을 다독여줄 거예요.'}
    ],
    happy: [
      {name:'치즈 가득 로제 떡볶이',emoji:'🧀',category:'신나는 분식',time:'약 20분',ingredients:'떡 · 어묵 · 우유',tip:'치즈를 넉넉히 얹어요',reason:'좋은 기분을 더 신나게 만들어줄 매콤달콤한 메뉴예요.'},
      {name:'바삭바삭 치킨마요 덮밥',emoji:'🍗',category:'행복 충전',time:'약 15분',ingredients:'닭고기 · 밥 · 달걀',tip:'마요네즈를 지그재그로',reason:'한입씩 먹을 때마다 기분 좋은 만족감이 차오를 거예요.'},
      {name:'새우 크림 파스타',emoji:'🍝',category:'기분 내는 한 끼',time:'약 25분',ingredients:'파스타 · 새우 · 생크림',tip:'후추를 넉넉히 갈아줘요',reason:'오늘의 좋은 기분에 어울리는 특별한 한 접시를 즐겨봐요.'}
    ],
    tired: [
      {name:'초간단 참치마요 덮밥',emoji:'🍚',category:'간편 한 그릇',time:'약 10분',ingredients:'참치 · 밥 · 달걀',tip:'간장 한 방울이면 충분해요',reason:'복잡한 준비 없이 금방 만들 수 있어 쉬어갈 수 있어요.'},
      {name:'전자레인지 계란찜',emoji:'🥚',category:'5분 간편식',time:'약 7분',ingredients:'달걀 · 물 · 소금',tip:'참기름 한 방울 더하기',reason:'재료도 과정도 간단해서 지친 날에도 부담이 없어요.'},
      {name:'간장 버터 비빔밥',emoji:'🍳',category:'초간단 집밥',time:'약 8분',ingredients:'밥 · 달걀 · 버터',tip:'김가루를 뿌려 마무리',reason:'밥 위에 올려 슥슥 비비면 완성, 설거지도 간단해요.'}
    ],
    blue: [
      {name:'매콤달콤 제육볶음',emoji:'🌶️',category:'입맛 깨우기',time:'약 20분',ingredients:'돼지고기 · 양파 · 고추장',tip:'상추에 싸서 한입',reason:'기분 좋은 매콤함이 잠시 잊었던 입맛을 깨워줄 거예요.'},
      {name:'새콤달콤 비빔국수',emoji:'🍜',category:'상큼한 한 그릇',time:'약 15분',ingredients:'소면 · 오이 · 고추장',tip:'식초를 살짝 더해요',reason:'새콤한 양념과 아삭한 채소로 입안에 생기를 채워봐요.'},
      {name:'얼큰한 김치우동',emoji:'🍲',category:'칼칼한 기분 전환',time:'약 15분',ingredients:'우동면 · 김치 · 대파',tip:'김치를 먼저 볶아주세요',reason:'얼큰하고 뜨끈한 국물로 답답한 기분을 풀어봐요.'}
    ],
    light: [
      {name:'아보카도 연어 포케',emoji:'🥗',category:'산뜻한 한 끼',time:'약 15분',ingredients:'연어 · 아보카도 · 밥',tip:'레몬즙을 톡 뿌려요',reason:'신선한 재료를 담아 가볍지만 알차게 즐길 수 있어요.'},
      {name:'두부 채소 샐러드',emoji:'🥬',category:'담백한 식사',time:'약 10분',ingredients:'두부 · 어린잎 · 방울토마토',tip:'참깨 드레싱 곁들이기',reason:'부담은 덜고 필요한 영양은 채워주는 산뜻한 메뉴예요.'},
      {name:'맑은 바지락 칼국수',emoji:'🍜',category:'개운한 국물',time:'약 20분',ingredients:'칼국수면 · 바지락 · 애호박',tip:'청양고추 조금 넣기',reason:'개운한 국물과 부드러운 면으로 속 편한 한 끼를 즐겨요.'}
    ],
    hungry: [
      {name:'푸짐한 돼지김치찜',emoji:'🍖',category:'든든한 한 상',time:'약 35분',ingredients:'돼지고기 · 김치 · 두부',tip:'김치 국물을 함께 넣어요',reason:'진하게 졸인 김치와 고기로 배부르게 즐기는 메뉴예요.'},
      {name:'차돌박이 된장찌개',emoji:'🥘',category:'밥도둑 메뉴',time:'약 25분',ingredients:'차돌박이 · 된장 · 감자',tip:'밥에 비벼 먹어도 좋아요',reason:'고소한 차돌박이와 구수한 된장국으로 제대로 채워봐요.'},
      {name:'불고기 비빔밥',emoji:'🍱',category:'알찬 한 그릇',time:'약 25분',ingredients:'소고기 · 밥 · 나물',tip:'고추장과 참기름으로 마무리',reason:'고기와 채소, 밥까지 한 그릇에 담아 든든함이 꽉 차요.'}
    ]
  };
  const moodNames = {comfort:'위로가 필요한 오늘',happy:'기분 좋은 오늘',tired:'지친 오늘',blue:'조금 우울한 오늘',light:'가볍게 먹고 싶은 오늘',hungry:'배고픈 오늘'};
  const cards = [...document.querySelectorAll('.mood-card')];
  const recommendButton = document.getElementById('recommendButton');
  const resultSection = document.getElementById('resultSection');
  let selectedMood = null;
  let lastMenu = null;

  cards.forEach((card) => card.addEventListener('click', () => {
    selectedMood = card.dataset.mood;
    cards.forEach((item) => item.setAttribute('aria-pressed', String(item === card)));
    recommendButton.disabled = false;
  }));

  function recommend() {
    if (!selectedMood) return;
    const options = menus[selectedMood];
    const available = options.filter((menu) => menu !== lastMenu);
    const menu = available[Math.floor(Math.random() * available.length)];
    lastMenu = menu;

    document.getElementById('resultTitle').textContent = `${moodNames[selectedMood]}의 추천 메뉴`;
    document.getElementById('resultEmoji').textContent = menu.emoji;
    document.getElementById('resultCategory').textContent = menu.category;
    document.getElementById('resultTime').textContent = menu.time;
    document.getElementById('resultName').textContent = menu.name;
    document.getElementById('resultReason').textContent = menu.reason;
    document.getElementById('resultIngredients').textContent = menu.ingredients;
    document.getElementById('resultTip').textContent = menu.tip;
    resultSection.hidden = false;
    resultSection.scrollIntoView({behavior:'smooth',block:'start'});
  }

  recommendButton.addEventListener('click', recommend);
  document.getElementById('rerollButton').addEventListener('click', recommend);
})();