window.onload = function () {
  let gz1 = document.querySelector('.gz1')
  let gz = document.querySelector('.gz')
  //获取白色提示点击圈
  let quan1 = document.querySelector('.quan1')
  let quan2 = document.querySelector('.quan2')
  let quan3 = document.querySelector('.quan3')
  let quan4 = document.querySelector('.quan4')
  //获取顶部内容
  let coten1 = document.querySelector('.coten1')
  let coten2 = document.querySelector('.coten2')
  let coten3 = document.querySelector('.coten3')
  let coten4 = document.querySelector('.coten4')
  let coten6 = document.querySelector('.coten6')
  let war = document.querySelector('.war')
  //获取上拉之后展示的效果元素
  let la = document.querySelector('.la')
  let z24 = document.querySelector('.z24')
  let z26 = document.querySelector('.z26')
  let z28 = document.querySelector('.z28')
  let fengche = document.querySelector('.fengche')
  let fc = document.querySelector('.fc')
  let flag1 = true
  let flag2 = false
  let flag3 = false
  let flag4 = false
  //获取的每个柱子
  let z02 = document.querySelector('.z02')
  let z03 = document.querySelector('.z03')
  let z04 = document.querySelector('.z04')
  let z05 = document.querySelector('.z05')
  let z06 = document.querySelector('.z06')
  let z07 = document.querySelector('.z07')
  let z08 = document.querySelector('.z08')
  let dh = document.querySelector('.dh')
  let z23 = document.querySelector('.z23')
  let z09 = document.querySelector('.z09')
  let z10 = document.querySelector('.z10')
  let z11 = document.querySelector('.z11')
  let z12 = document.querySelector('.z12')
  let z13 = document.querySelector('.z13')
  let wf = document.querySelector('.wf')
  let z25 = document.querySelector('.z25')
  let z14 = document.querySelector('.z14')
  let z15 = document.querySelector('.z15')
  let z16 = document.querySelector('.z16')
  let z17 = document.querySelector('.z17')
  let z18 = document.querySelector('.z18')
  let qian = document.querySelector('.qian')
  let z27 = document.querySelector('.z27')
  let z19 = document.querySelector('.z19')
  let z20 = document.querySelector('.z20')
  let z22 = document.querySelector('.z22')
  let z21 = document.querySelector('.z21')
  let shouji = document.querySelector('.shouji')
  //飞升之后获取的
  let textTop = document.querySelector('.textTop')
  let btnBottom = document.querySelector('.btnBottom')
  let Q1 = document.querySelector('.Q1')
  let Q2 = document.querySelector('.Q2')
  let Q3 = document.querySelector('.Q3')
  let z01 = document.querySelector('.z01')
  let shan = document.querySelector('.shan')
  let yun1 = document.querySelector('.yun1')
  let yun2 = document.querySelector('.yun2')
  let yun3 = document.querySelector('.yun3')
  let arr = document.querySelectorAll('div')
  console.log(arr);
  la.onclick = function () {//鼠标上滑事件
    la.style.display = 'none'
    z24.style.display = 'block'
    z26.style.display = 'block'
    z28.style.display = 'block'
    fengche.style.display = 'block'
    z24.setAttribute('class', 'z24 z24dh')
    z26.setAttribute('class', 'z26 z26dh')
    z28.setAttribute('class', 'z28 z28dh')
    fengche.setAttribute('class', 'fengche fengchedh')
    //摩天轮转动
    let i = 1
    setInterval(() => {
      if (i > 3) i = 1
      fc.setAttribute('src', './img/qietu/z18' + i + '.png ')
      i++
    }, 200)
    //z02到z08依次升起动画 第一段
    Ab(z02, 'z02', 3000)
    Ab(z03, 'z03', 3300)
    Ab(z04, 'z04', 3600)
    Ab(z05, 'z05', 3900)
    Ab(z06, 'z06', 4200)
    Ab(z07, 'z07', 4500)
    Ab(z08, 'z08', 4800)
    Quan(quan1, 7900) //光圈1显示
    setTimeout(() => { //点击光圈1顶部内容2显示,内容1隐藏
      coten1.style.display = 'none'
      coten2.style.display = 'block'
      coten2.setAttribute('class', 'coten2 wz')
    }, 7600)
  } //上滑结束处
  //点击光圈1 小鸽*快走*第一部分  到光圈2显示时结束！  
  quan1.addEventListener('click', function () {
    //点击隐藏圈1
    quan1.style.display = 'none'
    if (flag1) {
      let i = 1
      gz1.style.animation = 'gz1 1500ms linear , gz2 983.03ms 1500ms linear ,  gz3 2332.45ms 2483.23ms linear , gz4 1395.72ms 4815.48ms linear '
      gz1.style.bottom = '4.05rem'
      gz1.style.left = '1.5rem'
      //1
      XJ_1(1, 5, 1500)
      //2
      XJ_2(11, 15, 7, 1500)
      //3
      XJ_2(1, 5, 15, 2483.03)
      //4
      XJ_2(11, 15, 10, 4815.48)
      setTimeout(() => {
        flag2 = true
      }, 4815.48)
      flag1 = false
      //z23 ~ z09 ~  z13 升起动画 第二段 
      setTimeout(() => {
        z23.setAttribute('class', 'z23 z23dh')
        dh.setAttribute('class', 'dh dhdh')
        z23.style.display = 'block'
      }, 6500)
      Ab(z09, 'z09', 8500)
      Ab(z10, 'z10', 8800)
      Ab(z11, 'z11', 9100)
      Ab(z12, 'z12', 9400)
      Ab(z13, 'z13', 9700)
    }
    Quan(quan2, 12400)//光圈2显示
  })
  //点击光圈2 小鸽*快走*第二部分，到光圈3显示时结束！
  quan2.addEventListener('click', function () {
    //点击隐藏圈2
    quan2.style.display = 'none'
    if (flag2) {
      gz1.style.animation = 'gz5 522.11ms linear, gz6 3078.65ms 522.11ms linear'
      gz1.style.bottom = '6.1rem'
      gz1.style.left = '3.95rem'
      //1
      XJ_1(1, 5, 522.11)
      //2
      XJ_2(11, 15, 20, 522.11)
      setTimeout(() => {
        flag3 = true
      }, 522.11)
      flag2 = false
      //下面是waifai柱子z25 ，z14 到 z18 升起动画
      setTimeout(() => {
        z25.setAttribute('class', 'z25 z25dh')
        z25.style.display = 'block'
        wf.setAttribute('class', 'wf wfdh')
        z25.style.display = 'block'
      }, 4000)
      Ab(z14, 'z14', 6000)
      Ab(z15, 'z15', 6300)
      Ab(z16, 'z16', 6600)
      Ab(z17, 'z17', 6900)
      Ab(z18, 'z18', 7200)
    }
    //圈3显示
    Quan(quan3, 9500)
  })
  //点击光圈3，小鸽*快走*第三部分  
  quan3.addEventListener('click', function () {
    quan3.style.display = 'none'
    if (flag3) {
      gz1.style.animation = ' gz7 1347.41ms linear, gz8 994.23ms 1347.41ms linear,gz9 1625.69ms 2341.64ms linear'
      gz1.style.bottom = '3.5rem'
      gz1.style.left = '5.48rem'
      //1
      XJ_1(21, 25, 1347.41)
      //2
      XJ_2(31, 35, 7, 1347.41)
      //3
      XJ_2(21, 25, 12, 2341.64)
      setTimeout(() => {
        flag4 = true
      }, 2341.64)
      flag3 = false
      //柱子z27 ，z19 到 z22 升起动画
      setTimeout(() => {
        z27.setAttribute('class', 'z27 z27dh')
        z27.style.display = 'block'
        qian.setAttribute('class', 'qian qiandh')
        z27.style.display = 'block'
      }, 4000)
      Ab(z19, 'z19', 6000)
      Ab(z20, 'z20', 6300)
      Ab(z21, 'z21', 6600)
      Ab(z22, 'z22', 6900)
    }
    //光圈4显示
    Quan(quan4, 9250)
  })
  //点击光圈4，小鸽*快走*第四部分
  quan4.addEventListener('click', function () {
    quan4.style.display = 'none'
    if (flag4) {
      gz1.style.animation = ' gz10 1699.82ms linear , gz11 972.18ms 1699.82ms linear'
      gz1.style.bottom = '3.1rem'
      gz1.style.left = '3.22rem'
      //1
      XJ_1(31, 35, 1699.82)
      //2
      XJ_2(1, 5, 7, 1699.82)
      flag4 = false
    }
  })
  //走到圈1 内容三显示
  ji_Text(quan1, coten2, 'none', coten3, 'block', coten3, 'block', coten3, 'coten3', 7500)
  //走到圈2 内容四显示
  ji_Text(quan2, coten3, 'none', coten4, 'block', coten4, 'block', coten4, 'coten4', 4000)
  //走到圈3  内容六显示
  ji_Text(quan3, coten4, 'none', coten3, 'none', coten6, 'block', coten6, 'coten6', 5000)
  //加载小鸡行走音乐
  //1
  Yiny(quan1, 6200, 10, mp3_4)
  //2
  Yiny(quan2, 3500, 10, mp3_4)
  //3
  Yiny(quan3, 3900, 10, mp3_4)
  //4
  Yiny(quan4, 2550, 10, mp3_4)
  //加载首屏点击音效
  Yiny(la, 2000, 10, mp3_1)
  //加载石柱升起音效
  Zhuz(la, 4000, mp3_2, 3800)
  Zhuz(quan1, 7200, mp3_2, 4300)
  Zhuz(quan2, 4200, mp3_2, 4900)
  Zhuz(quan3, 4200, mp3_2, 4600)
  //小鸡飞升后的动画呈现
  quan4.addEventListener('click', () => {
    setTimeout(() => {
      war.setAttribute('class', 'war bg')
      gz1.setAttribute('class', 'gz1 qifei')
      z22.setAttribute('class', 'z22 z22dh qifei')
      shouji.style.display = 'none'
      coten6.style.display = 'none'
      coten3.style.display = 'none'
      coten4.style.display = 'none'
      setTimeout(() => {
        textTop.style.display = 'block'
        btnBottom.style.display = 'block'
        Q1.style.display = 'block'
        Q2.style.display = 'block'
        Q3.style.display = 'block'
        Q1.setAttribute('class', 'Q1 Qdh')
        Q2.setAttribute('class', 'Q2 Q2_4dh')
        Q3.setAttribute('class', 'Q3 Q2_3dh')
      }, 2800)
    }, 2800)
  })
  //物体下降动画
  quan4.addEventListener('click', () => {
    setTimeout(() => {
      {
        Xj(z01, 'z01')
        Xj(z02, 'z02')
        Xj(z03, 'z03')
        Xj(z04, 'z04')
        Xj(z05, 'z05')
        Xj(z06, 'z06')
        Xj(z07, 'z07')
        Xj(z08, 'z08')
        Xj(z09, 'z09')
        Xj(z10, 'z10')
        Xj(z11, 'z11')
        Xj(z12, 'z12')
        Xj(z13, 'z13')
        Xj(z14, 'z14')
        Xj(z15, 'z15')
        Xj(z16, 'z16')
        Xj(z17, 'z17')
        Xj(z18, 'z18')
        Xj(z19, 'z19')
        Xj(z20, 'z20')
        Xj(z21, 'z21')
        Xj(shan, 'shan')
        Xj(z23, 'z23')
        Xj(z24, 'z24')
        Xj(z25, 'z25')
        Xj(z26, 'z26')
        Xj(z27, 'z27')
        Xj(z28, 'z28')
        Xj(fengche, 'fengche')
        Xj(yun1, 'yun1')
        Xj(yun2, 'yun2')
        Xj(yun3, 'yun3')
      }
    }, 3080)
  })
  //最终飞升音效
  Zhuz(quan4, 3080, mp3_3, 10000)
  /* 点击柱子瞬移问题 */
  quan2.addEventListener('click', () => {
    setTimeout(() => {
      z08.setAttribute('acv', 'true')
      z13.setAttribute('acv', 'true')
    }, 9600)
  })
  quan3.addEventListener('click', () => {
    z08.setAttribute('acv', 'false')
    z13.setAttribute('acv', 'false')
    setTimeout(() => {
      z08.setAttribute('acv', 'true')
      z13.setAttribute('acv', 'true')
      z18.setAttribute('acv', 'true')
    }, 9500)
  })
  quan4.addEventListener('click', () => {
    z08.setAttribute('acv', 'false')
    z13.setAttribute('acv', 'false')
    z18.setAttribute('acv', 'false')
  })
  Fnp(z08, '1.5rem', '4.05rem', 'block', 'none', 'none')
  Fnp(z13, '3.95rem', '6.1rem', 'none', 'none', 'block')
  Fnp(z18, '5.48rem', '3.5rem', 'none', 'block', 'none')
  //封装的一个柱子升起动画的函数
  function Ab(x, y, z) {
    setTimeout(() => {
      x.setAttribute('class', `${y} ${y}dh`)
      x.style.display = 'block'
    }, z)
  }
  //封装的一个光圈显示的函数
  function Quan(e, t) {
    setTimeout(() => {
      e.style.display = 'block'
    }, t)
  }
  //封装的一个加载音频的函数
  function Yiny(a, b, c, d) {
    a.addEventListener('click', () => {
      let sid1 = setInterval(() => {
        d.play()
        setTimeout(() => {
          d.pause()
          clearInterval(sid1)
        }, b)
      })
    }, c)
  }
  //封装的一个石柱升起音乐的函数||  a=>触发元素 ,b=>间隔时间触发,c=>加载的音乐,d=>指定时间停止播放
  function Zhuz(a, b, c, d) {
    a.addEventListener('click', () => {
      setTimeout(() => {
        let sid1 = setInterval(() => {
          c.play()
          setTimeout(() => {
            c.pause()
            clearInterval(sid1)
          }, d)
        }, 10)
      }, b)
    })
  }
  /* 柱子下降封装函数 */
  function Xj(a, b) {
    a.setAttribute('class', `${b}  xiaj`)
  }
  //封装的一个点击柱子判断开关是否为true，而后瞬移和更换顶部文字
  function Fnp(a, c, d, h, i, z) {
    a.addEventListener('click', () => {
      if (a.getAttribute('acv') == 'true') {
        gz1.style.left = `${c}`
        gz1.style.bottom = `${d}`
        coten4.style.display = `${z}`
        coten3.style.display = `${h}`
        coten6.style.display = `${i}`
      }
    })
  }
  //封装的一个小鸡走到圈位置顶部内容3显示其他隐藏的一个函数
  function ji_Text(a, b, c, d, e, f, g, h, i, j) {
    a.addEventListener('click', () => {
      setTimeout(() => {
        b.style.display = c
        d.style.display = e
        f.style.display = g
        h.setAttribute('class', `${i} wz`)
      }, j)
    })
  }
  //封装的一个小鸡起步摆脚函数 
  function XJ_1(a, b, c) {
    let i = a
    let sid1 = setInterval(() => {
      if (i > b) i = a
      gz.setAttribute('src', './img/allgezi/gz' + i + '.png ')
      i++
    }, 150)
    setTimeout(() => {
      clearInterval(sid1)
    }, c);
  }
  //封装的一个小鸡拐弯摆脚函数
  function XJ_2(z, j, k, y) {
    setTimeout(() => {
      let i = z
      let a = 0
      let sid2 = setInterval(() => {
        if (i > j) i = z
        gz.setAttribute('src', './img/allgezi/gz' + i + '.png ')
        i++
        a++
        if (a == k) {
          clearInterval(sid2)
        }
      }, 150)
    }, y)
  }
}



