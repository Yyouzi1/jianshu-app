import styled from 'styled-components'
export const HomeWrapper = styled.div`
    width:960px;
    margin:0 auto;
    overflow: hidden;
`;

export const HomeLeft = styled.div`
    width:625px;
    margin-left:15px;
    padding-top:30px;
    float:left;
    .banner-img {
        width:625px;
        height:270px;
    }
`;

export const HomeRight = styled.div`
    width:280px;
    float:right;
`;

export const TopicWrapper = styled.div`
    padding:20px 0 10px 0;
    overflow: hidden;
`;

export const TopicItem = styled.div`
	float: left;
	height: 32px;
	line-height: 32px;
	margin-left: 18px;
	margin-bottom: 18px;
	padding-right: 10px;
	background: #f7f7f7;
	font-size: 14px;
	color: #000;
	border: 1px solid #dcdcdc;
	border-radius: 4px;
	.topic-pic {
		display: block;
		float: left;
		width: 32px;
		height: 32px;
		margin-right: 10px;
	}
`;

export const ListItem = styled.div`
    overflow: hidden;
    padding: 20px 0;
    border-bottom: 1px solid #dcdcdc;
    .pic {
        width:125px;
        display: block;
        float:right;
    }
`;

export const ListInfo = styled.div`
    width: 500px;
    float:left;
    .title {
        margin: -7px 0 4px;
        display: inherit;
        font-size: 18px;
        font-weight: 700;
        line-height: 1.5;
        color: #333;
    }
    .desc {
        margin: 0 0 8px;
        font-size: 13px;
        line-height: 24px;
        color: #999;
    }
`;
export const LoadMore = styled.div`
    margin: 30px auto 60px;
    padding: 10px 15px;
    text-align: center;
    font-size: 15px;
    border-radius: 20px;
    color: #fff;
    background-color: #a5a5a5;
    display: block;
    cursor: pointer;
    &:hover {
        background-color : #9b9b9b;
    };
`

export const RecommendWrapper = styled.div`
    margin: 30px 0;
`

export const RecommendItem = styled.div` 
width:280px;
min-height: 50px;
border-radius: 4px;
margin-bottom: 6px;
background:url(${(props) => props.imgUrl});
background-size: contain;
`

export const WriterWrapper = styled.div`
margin: 0 0 20px;
text-align: left;
list-style: none;
    .title {
        height:30px;
        span {
            font-size: 14px;
    color: #969696;
    float:left;
        }
        a {
            float: right;
            display: inline-block;
            font-size: 14px;
            color: #969696;
        }
    }

`
export const WriterItem = styled.div`
margin-top: 15px;
line-height: 20px;
position:relative;
    .pic {
        width: 46px;
        border: 1px solid #ddd;
        border-radius: 50%;
        float:left;
        margin-right: 10px;
    }
    .follow {
        float: right;
        margin-top: 10px;
        padding: 0;
        font-size: 13px;
        color: #42c02e;
        text-decoration: none;
    }
    .writer{
        .writer-name {
            padding-top: 5px;
            margin-right: 60px;
            font-size: 14px;
            display: block;
            color: #2f2f2f;
            text-decoration: none;
        }
        .writer-intro {
            margin-top: 2px;
            font-size: 12px;
            color: #969696;
        }
    }
`

export const BackTop = styled.div`
cursor: pointer;
width: 50px;
height: 50px;
font-size: 36px;
text-align: center;
position: fixed;
    bottom: 40px;
    right: 40px;
    z-index: 1040;
    border: 1px solid #dcdcdc;
`