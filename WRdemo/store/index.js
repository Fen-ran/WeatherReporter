import Vue from 'vue'
import Vuex from 'vuex'

// 告诉 vue “使用” vuex
Vue.use(Vuex)

// 创建一个对象来保存应用启动时的初始状态
// 需要维护的状态
const store = new Vuex.Store({
    state: {
        // 放置初始状态 app启动的时候的全局的初始值
        bankInf: { "name": "我是vuex的第一个数据", "id": 100, "bankName": "中国银行" },
        WeatherData: {
            "now": {
                "temp": "31",
                "wind_direction": "南风",
                "wind_strength": "3级",
                "humidity": "42%",
                "time": "15:24"
            },
            "city": "北京",
            "today": {
                "temperature": "21℃~30℃",
                "weather": "多云",
                "weather_id": {
                    "fa": "01",
                    "fb": "01"
                },
                "wind": "东南风微风",
                "week": "星期四",
                "city": "北京",
                "date_y": "2019年07月11日",
                "dressing_index": "热",
                "dressing_advice": "天气热，建议着短裙、短裤、短薄外套、T恤等夏季服装。",
                "uv_index": "中等",
                "comfort_index": "",
                "wash_index": "较适宜",
                "travel_index": "适宜",
                "exercise_index": "适宜",
                "drying_index": ""
            },
            "future": {
                "day_20190711": {
                    "temperature": "21℃~30℃",
                    "weather": "多云",
                    "weather_id": {
                        "fa": "01",
                        "fb": "01"
                    },
                    "wind": "东南风微风",
                    "week": "星期四",
                    "date": "20190711"
                },
                "day_20190712": {
                    "temperature": "22℃~32℃",
                    "weather": "多云转晴",
                    "weather_id": {
                        "fa": "01",
                        "fb": "00"
                    },
                    "wind": "西南风微风",
                    "week": "星期五",
                    "date": "20190712"
                },
                "day_20190713": {
                    "temperature": "23℃~33℃",
                    "weather": "多云",
                    "weather_id": {
                        "fa": "01",
                        "fb": "01"
                    },
                    "wind": "北风微风",
                    "week": "星期六",
                    "date": "20190713"
                },
                "day_20190714": {
                    "temperature": "23℃~33℃",
                    "weather": "晴",
                    "weather_id": {
                        "fa": "00",
                        "fb": "00"
                    },
                    "wind": "西南风微风",
                    "week": "星期日",
                    "date": "20190714"
                },
                "day_20190715": {
                    "temperature": "24℃~35℃",
                    "weather": "晴转多云",
                    "weather_id": {
                        "fa": "00",
                        "fb": "01"
                    },
                    "wind": "南风微风",
                    "week": "星期一",
                    "date": "20190715"
                },
                "day_20190716": {
                    "temperature": "23℃~33℃",
                    "weather": "多云",
                    "weather_id": {
                        "fa": "01",
                        "fb": "01"
                    },
                    "wind": "北风微风",
                    "week": "星期二",
                    "date": "20190716"
                },
                "day_20190717": {
                    "temperature": "22℃~32℃",
                    "weather": "多云转晴",
                    "weather_id": {
                        "fa": "01",
                        "fb": "00"
                    },
                    "wind": "西南风微风",
                    "week": "星期三",
                    "date": "20190717"
                }
            }
        }
    },
    mutations: {
        newWeatherData(state, arr){
            state.WeatherData = arr;
            console.log(state.WeatherData)
        }
    }
})
// 整合初始状态和变更函数，我们就得到了我们所需的 store
// 至此，这个 store 就可以连接到我们的应用中
export default store