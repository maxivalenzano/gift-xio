import React from 'react';
import BannerAnim from 'rc-banner-anim';
import QueueAnim from 'rc-queue-anim';
import TweenOne from 'rc-tween-one';

// import '../assets/index.less';
// import '../assets/thumb.less';
// import '../index.less';


const { Element } = BannerAnim;


export default function Banner() {

    return (
        <BannerAnim style={{ height: 200 }}>
            <Element key="aaa"
                prefixCls="banner-user-elem"
            >
                <QueueAnim key="1" name="QueueAnim">
                    <h1 key="h1">♥Xio 💕 Maxi♥</h1>
                    <p key="p"></p>
                </QueueAnim>
                <TweenOne
                    animation={{ y: 50, opacity: 0, type: 'from', delay: 200 }}
                    key="2"
                    name="TweenOne"
                >
                    Ant Motion Demo.Ant Motion Demo
                </TweenOne>
            </Element>

        </BannerAnim>
    )
}