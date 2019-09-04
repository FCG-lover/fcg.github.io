import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);
const store = new Vuex.Store({
    state: {
        work: [
            {
                name: "比笔移动端网站",
                date: "2019.3-2019.6",
                describe:
                    "该项目是一个基于app开发的图文分享的webapp，主要的功能：文章发布，点赞，评论，收藏，关注，设置偏好等等。"
            },
            {
                name: "奇妙漫画",
                date: "2018.9-2018.2",
                describe:
                    "该项目是一个阅读漫画的webApp。该项目包含登陆注册、关注、评论与搜索等功能。"
            },
            {
                name: "饿鱼外卖小程序",
                date: "2018.7-2018.9",
                describe:
                    "该项目是基于大学城范围内，基于学生内部的外卖微信小程序，主要功能能够查看大学附近的店家外卖，充值，下单，可以精确送到宿舍内。"
            }
        ],
        indicator: [
            { name: "HTML", max: 100, value: 80 },
            { name: "CSS", max: 100, value: 80 },
            { name: "jquery", max: 100, value: 70 },
            { name: "JavaScript", max: 100, value: 80 },
            { name: "vue", max: 100, value: 80 },
            { name: "react", max: 100, value: 70 },
            { name: "node.js", max: 100, value: 70 },
            { name: "小程序", max: 100, value: 70 }
        ]
    }
});

export default store