import React, { Component } from 'react';
import {
	View,
	Text,
	Image,
	ScrollView,
    StyleSheet,
    TouchableOpacity
} from 'react-native';

// const newsData = [
// 	{ img: require('../../assets/images/car.png'),
// 	  title: '苹果禁用微信打赏',
// 	  content: '最近，苹果盯上了中国App的打赏功能，希望从中分一杯羹。正因为此，微信的赞赏功能在上个月被迫关闭了。不过，根据外媒的最新报道，被苹果公司盯上的公司绝不只是微信一个。苹果可能要对中国其他具备打赏功能的App下手了。《华尔街日报》5月19日报道，据微信及其它公司的高管透露，苹果已经通知几个中国社交网络App，根据App Store的规定，苹果要求它们禁用赞赏功能。值得注意的是目前国内的新浪微博App、分答App、豆瓣App等都具备打赏功能。'
// 	},
// 	{ img: require('../../assets/images/car.png'),
// 	  title: '特普朗小儿子出现在白宫',
// 	  content: '上周,美国总统特朗普的小儿子巴伦带领其五年级的同学来了一次"白宫之旅"。巴伦热情地带同学们参观白宫,而特朗普和第一夫人梅拉尼娅也亲自接待了这群小朋友。英国《每日邮报》援引美国《纽约邮报》的消息称,10日,巴伦与同年级约80名同学在老师和特勤处工作人员的陪同下,乘坐大巴从纽约前往华盛顿。一位匿名消息人士称:"所有的孩子都精心打扮,女孩子都身穿裙子,而男孩们则身穿卡其裤搭配衬衫,他们看起来非常可爱。'
// 	},
// 	{ img: require('../../assets/images/car.png'),
// 	  title: '南沙群岛问题',
// 	  content: '自汉武帝起不断利用南海，宋代起海事发达、南沙正式入中国版图。明清时利用层次更深，利用南沙和下南洋都是风气，中国渔民在中业岛等岛上建房建水井而它国并无此系列行动。[3]  2015年10月28日报道的英美海军航海旧记录证明，清代和民国只有中国的渔民遍布南海各岛礁，并常居住在一些岛屿上。[4]  二战结束时中国从日本手中收回南沙，驻军太平岛等并广泛巡护，含九段线的中国地图被国际广泛承认。美国曾向中国政府申请勘察北子岛等是尊重中国主权的行为。美国克里斯通公司严格论证万安北-21版块属中国主权，合同至今有效。'
// 	},
// 	{ img: require('../../assets/images/car.png'),
// 	  title: '苹果禁用微信打赏',
// 	  content: '最近，苹果盯上了中国App的打赏功能，希望从中分一杯羹。正因为此，微信的赞赏功能在上个月被迫关闭了。不过，根据外媒的最新报道，被苹果公司盯上的公司绝不只是微信一个。苹果可能要对中国其他具备打赏功能的App下手了。《华尔街日报》5月19日报道，据微信及其它公司的高管透露，苹果已经通知几个中国社交网络App，根据App Store的规定，苹果要求它们禁用赞赏功能。值得注意的是目前国内的新浪微博App、分答App、豆瓣App等都具备打赏功能。'
// 	},
// 	{ img: require('../../assets/images/car.png'),
// 	  title: '特普朗小儿子出现在白宫',
// 	  content: '上周,美国总统特朗普的小儿子巴伦带领其五年级的同学来了一次"白宫之旅"。巴伦热情地带同学们参观白宫,而特朗普和第一夫人梅拉尼娅也亲自接待了这群小朋友。英国《每日邮报》援引美国《纽约邮报》的消息称,10日,巴伦与同年级约80名同学在老师和特勤处工作人员的陪同下,乘坐大巴从纽约前往华盛顿。一位匿名消息人士称:"所有的孩子都精心打扮,女孩子都身穿裙子,而男孩们则身穿卡其裤搭配衬衫,他们看起来非常可爱。'
// 	},
// 	{ img: require('../../assets/images/car.png'),
// 	  title: '南沙群岛问题',
// 	  content: '自汉武帝起不断利用南海，宋代起海事发达、南沙正式入中国版图。明清时利用层次更深，利用南沙和下南洋都是风气，中国渔民在中业岛等岛上建房建水井而它国并无此系列行动。[3]  2015年10月28日报道的英美海军航海旧记录证明，清代和民国只有中国的渔民遍布南海各岛礁，并常居住在一些岛屿上。[4]  二战结束时中国从日本手中收回南沙，驻军太平岛等并广泛巡护，含九段线的中国地图被国际广泛承认。美国曾向中国政府申请勘察北子岛等是尊重中国主权的行为。美国克里斯通公司严格论证万安北-21版块属中国主权，合同至今有效。'
// 	},
// ]
class NewsItem extends React.Component {
	render() {
		console.log(this.props)
		return (
			<TouchableOpacity
				style={styles.item}
        		onPress={() => console.log(this.props.num)}
			>
				<View style={styles.newsList}>
					<Image style={styles.image}
						resizeMode={'cover'}
						source={{uri: this.props.src}}
					/>
					<View style={styles.text}>
						<Text style={styles.title}>{this.props.title}</Text>
						<Text style={styles.des}>{this.props.des}</Text>
					</View>
				</View>
			</TouchableOpacity>
		)
	}
}

const renderNewsList = (item, index) =>{
	return (
		<NewsItem key={index} src={item.img} title={item.title} des={item.des} num={index} />
	)
} 

export default class NewsList extends Component {
	
	render() {
		const { newsData } = this.props;
		return (
			<ScrollView>
				{ newsData.map(renderNewsList) }
			</ScrollView>
		)
	}
}

const styles = StyleSheet.create({
	newsList: {
		flex: 1,
		flexDirection: 'row',
		margin: 5,
	},
	item: {
		borderColor: '#eee',
		borderBottomWidth: 1,
	},
    image: {
    	flex: 3,
    },
    text: {
    	flex: 6,
    	paddingLeft: 10,
    	paddingBottom: 10,
    },
    title: {
    	fontWeight: 'bold',
    	fontSize: 16,
    },
    des: {
    	height: 70,
    	paddingTop: 5,
    	paddingRight: 5,
    	overflow: 'hidden',
    }
});