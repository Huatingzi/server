/*
 * @Author: zhengchunyang 
 * @Date: 2019-01-27 13:21:52 
 * @Last Modified by: zhengchunyang
 * @Last Modified time: 2019-03-31 22:06:35
 */
import '../../../style/pc.scss';
import head from '../components/head/index';
import zonghe from '../components/annulationPage/zonghe/index';
import zongheList from '../components/annulationPage/zonghe_list/index';


import footer from '../components/footer/index';
import alertLinkServe from '../components/alertLinkServe/index';

$(function(){
    alertLinkServe();
    head();
    zonghe();
    zongheList();
    footer();

});