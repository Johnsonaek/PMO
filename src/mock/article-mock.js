import mock from 'mockjs'
const Random = mock.Random

// mock一组数据
export default {
  mockData (mock) {
    
    const getData = function() {
       let articles = [];
       for (let i = 0; i < 10; i++) {
        let newArticleObject = {
            projectName: "苏小研"+Random.string('number', 3)+"号项目", 
            projectNameIn:"mock"+Random.string('number', 3)+"号项目",
            startTime: Random.date() ,
            purchaseType:"单一采购",
            onlineTime:Random.date(),
            projectPrice:"$"+Random.string('number', 5)  
        }
        articles.push(newArticleObject)
    }
 
    return {
        articles: articles
    }
}

    mock.mock('/article/list', 'get', getData)

}
}

// Mock.mock( url, post/get , 返回的数据)；
//Mock.mock('/news/index', 'post', produceNewsData)