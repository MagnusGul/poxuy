$('button').on('click', function() {
    let Pz = $('#pizdec').val();
    let Sb1 =  $('#money_before').val();
    let Sb2 = $('#money_after').val();

    let Px1;
    let Px2;
    let Px3;

    let poxuy;

    Px1 = (Sb1 - Pz) - (Sb2 - Pz);
    Px2 = Px1 / (Sb1 - Pz);
    Px3 = Px2 * 100;
    Px3 = 100 - Px3;

    if (Px3 == 0) {
        poxuy = 'Ты или умэр или бомж. Тебе не похуй';
    } else if (10 > Px3) {
        poxuy = 'Вам не похуй';
    } else if (50 > Px3 && Px3 > 10)  {
        poxuy = 'Вам немножечко похуй, но все таки НЕ ПОХУЙ';
    } else if (Px3 == 50) {
        poxuy = 'Ну может похуй может не похуй. Мне похуй сам поебывай';
    } else if (90 > Px3 && Px3 > 50) {
        poxuy = 'Вам немножечко не похуй, но все таки ПОХУЙ';
    } else if (100 > Px3 && Px3 > 90) {
        poxuy = 'Вам ПОХУЙ';
    } else if (Px3 == 100) {
        poxuy = 'Вам абсолютно невъебенно вулканически малекулярно, диоксидно облачно ПОЕБАТЬ';
    } 

    $('body').html('<header><h1>ВАМ ПОЕБАТЬ НА: </h1></header><h1>'+ Px3 +'%</h1><h1>'+ poxuy +'</h1>');
})
