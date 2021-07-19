<template>
    <div class="movie_body">
        <ul>
            <li v-for="item in movieList" :key="item.id">
                <div class="pic_show"><img :src="item.img | setWH('170.230')"></div>
                <div class="info_list">
                    <h2>{{item.nm}}</h2>
                    <p>观众评 <span class="grade">{{item.sc}}</span></p>
                    <p>主演：{{item.star}}</p>
                    <p>{{item.showInfo}}</p>
                </div>
                <div class="btn_mall">
                    购票
                </div>
            </li>
        </ul>
    </div>
</template>>

<script>
export default {
    name:'NowPlaying',
    data:function(){
        return{
            movieList:[]
        }
    },
    // 组件的生命周期函数
    mounted:function(){
        // 从猫眼电影上获取【正在上映】数据信息
        this.$axios.get('/movieOnInfoList?ci=1&token=&limit=10').then( (res) => {
            console.log(res.data.movieList);
            // 判断是否获取到数据
            var statusText = res.statusText;
            if(statusText === 'OK'){
                this.movieList = res.data.movieList;
            }

            // 需要对请求到的图像链接做处理
            // http://p0.meituan.net/w.h/movie/120f2e1e6b0a67449e31107a598c5c911203737.jpg
            // 处理后（w.h）：
            // https://p0.meituan.net/170.230/movie/120f2e1e6b0a67449e31107a598c5c911203737.jpg
            // for(var i=0; i<this.movieList.length; i++){
            //     console.log(this.movieList[i].img);
            //     this.movieList[i].img.replace(/w\.h/,'170.230');
            //     console.log(this.movieList[i].img);
            // }
        })
    }
}
</script>

<style scoped>
#content .movie_body{ flex:1; overflow:auto;}
.movie_body ul{ margin:0 12px; overflow: hidden;}
.movie_body ul li{ margin-top:12px; display: flex; align-items:center; border-bottom: 1px #e6e6e6 solid; padding-bottom: 10px;}
.movie_body .pic_show{ width:64px; height: 90px;}
.movie_body .pic_show img{ width:100%;}
.movie_body .info_list { margin-left: 10px; flex:1; position: relative;}
.movie_body .info_list h2{ font-size: 17px; line-height: 24px; width:150px; overflow: hidden; white-space: nowrap; text-overflow:ellipsis;}
.movie_body .info_list p{ font-size: 13px; color:#666; line-height: 22px; width:200px; overflow: hidden; white-space: nowrap; text-overflow:ellipsis;}
.movie_body .info_list .grade{ font-weight: 700; color: #faaf00; font-size: 15px;}
.movie_body .info_list img{ width:50px; position: absolute; right:10px; top: 5px;}
.movie_body .btn_mall , .movie_body .btn_pre{ width:47px; height:27px; line-height: 28px; text-align: center; background-color: #f03d37; color: #fff; border-radius: 4px; font-size: 12px; cursor: pointer;}
.movie_body .btn_pre{ background-color: #3c9fe6;}

</style>