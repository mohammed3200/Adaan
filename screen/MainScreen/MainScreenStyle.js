import { StyleSheet } from 'react-native';
import { SIZES, COLORS, SHADOWS, FONT} from '../../constants';

const StyleHeader = StyleSheet.create({
    textSmall:{
        fontSize:SIZES.medium,
        fontFamily: "Tajawal-Medium",
        color:COLORS.Black,
    },
    textBig:{
        fontSize:SIZES.xLarge * .75,
        fontFamily: "Tajawal-Medium",
        textAlign:'center',  
    },
    NamePayer:{
        fontSize:SIZES.medium,
        fontFamily: "Tajawal-Bold",
        color:COLORS.Black,
    },
    Subdistrict:{
        display:'flex',
        flexDirection:'column',
    },
    BasicContainer:{
        width:'100%',
        direction:'flex',
        flexDirection:'row',
        justifyContent:'space-evenly',
    }


})

const StyleContents = StyleSheet.create({
    ListPrayers:{
        width:'auto',
        display:'flex',
        flexDirection:'column',
        paddingHorizontal:10,
        paddingVertical:7,
        gap:10,
    },
    PrayerCard:{
        width:'100%',
        display:'flex',
        flexDirection:'row',
        alignItems:'center',
        height:SIZES.xLarge * 2,
        // borderColor:COLORS.gray,
        // borderWidth: 3,
        borderRadius:10,
        backgroundColor:COLORS.gray2,
        // paddingHorizontal:SIZES.medium - 10,
        // paddingVertical:SIZES.small - 10,
    },
    PrayerName:{
        flex:1,
        fontSize:SIZES.large * 1.15,
        paddingRight:'10%',    
        // paddingBottom:'1%',
        fontFamily: "Tajawal-Medium",

    },
    PrayerTime:{
        flex:1,
        // padding:"3%",
        fontWeight:'300',
        textAlign:'left',
        fontSize:SIZES.xLarge * 1.2,
        alignContent:'flex-start',
        fontFamily: "Tajawal-Light",  
    },
    
    PrayerImage:{
        width:SIZES.xLarge * 2,
        height:SIZES.xLarge * 2,
        borderTopRightRadius:10,
        borderBottomRightRadius:10
    }

})

export {StyleHeader,StyleContents}