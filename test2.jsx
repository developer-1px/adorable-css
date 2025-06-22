function _($) {
  return function (...props) {
    const { Frame, Rectangle, Text, Instance, Thumbnail, Title, Desc, MoreButton } = $(props)
    return (
      // Frame 1000011726
      Frame(
        '387x387 vbox(center) r(20) bg(#fff) b(#eee) bw(1) clip',

        // Asset: greenrookie-img 3
        Thumbnail(
          'w(fill) h(194)',

          // Frame 1000011725
          Frame(
            'w(fill) h(hug) vbox(left) p(24/40/24/30)',

            // Frame 1000011724
            Frame(
              'w(fill) h(hug) vbox(left) gap(24)',

              // Frame 1000011723
              Frame(
                'w(fill) h(hug) vbox(left) gap(10)',

                // NAVER CLOUD ACE
                Title('w(fill) h(hug) font(22/150%) 700 c(#222)', 'Green Rookie'),

                // 클라우드 도입부터 마이그레이션 계획
                Desc(
                  'w(fill) h(hug) font(16/150%) c(#707070)',
                  '교육기관에 필요한 클라우드 인프라와 교육, 기술 컨설팅을 제공하는 아카데믹 지원 프로그램입니다.',
                ),
              ),

              // 3. text button
              MoreButton(
                'w(hug) h(24) hbox(middle) gap(6)',

                // btn/text_btn_16_bl
                Text('font(15/150%) 600 c(#222) nowrap', '자세히보기'),

                // Asset: moveinto16
                Instance('14x14 relative'),
              ),
            ),
          ),
        ),
      )
    )
  }
}
