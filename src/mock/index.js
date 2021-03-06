import Mock from 'mockjs'
const domain = 'http://mockjs.com/api'

import users from './user/users'
import articles from './article/articles'
import questions from './question/questions'

Mock.mock(`${domain}/user/signin`,'post',function(options){
	var username= JSON.parse(options.body).username
	var password= JSON.parse(options.body).password

	//var isSignin = false
	var user = {}
	for(var i=0;i<users.length;i++){
		var item=users[i]
		if(item.username==username&&item.password==password){
			//isSignin = true
			user = users[i]
		}
	}
	return user
})

Mock.mock(`${domain}/article/articles`,'get',articles)

Mock.mock(`${domain}/question/questions`,'get',questions)