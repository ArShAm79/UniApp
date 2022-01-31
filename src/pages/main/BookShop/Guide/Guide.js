import React from "react";
import SimpleHeader from "../../../../components/SimpleHeader";
import Typography from "../../../../components/Typography";
import {ScrollView, View} from "react-native";
import palette from "../../../../theme/palette";
import HorizontalSeparator from "../../../../components/HorizontalSeparator";

export default function Guide() {
    return (
        <View style={{backgroundColor: palette.M_3_SYS_ON_PRIMARY,flex:1,}}>
            <SimpleHeader title="راهنمای ثبت اگهی"/>
            <View style={{marginTop: 60, marginHorizontal: 16}}>
                <View>
                    <Typography variant="body2" color={palette.M_3_SYS_ON_BACKGROUND}>
                        ۱- توضیحات آگهی را کامل بنویسید.
                    </Typography>
                </View>
                <View  style={{marginTop:60}}>
                <Typography variant="body2"color={palette.M_3_SYS_ON_BACKGROUND}>
                    ۲- فراموش نکنید تا حتما یک راه ارتباطی را در توضیحات ذکر کنید.
                </Typography>
            </View>
                <View style={{marginTop:60}}>
                <Typography variant="body2"color={palette.M_3_SYS_ON_BACKGROUND}>
                    ۳- نوشتن هرگونه درخواست بیعانه، حق ثبت درخواست، مجاز نیست.
                </Typography>
            </View>
                <View style={{marginTop:60}}>
                <Typography variant="body2"color={palette.M_3_SYS_ON_BACKGROUND}>
                    ۴- درج اطلاعات بانکی و هویتی در توضیحات مجاز نیست.
                </Typography>
            </View>
                <View style={{marginTop:60}}>
                <Typography variant="body2"color={palette.M_3_SYS_ON_BACKGROUND}>
                    ۵- از تصویری با کیفیت، واقعی و مرتبط با آگهی استفاده کنید.
                </Typography>
            </View>
                <View style={{marginTop:60}}>
                <Typography variant="body2"color={palette.M_3_SYS_ON_BACKGROUND}>
                    ۶- تصاویر شامل هرگونه اطلاعات شخصی، قابل انتشار نیستند.
                </Typography>
            </View>
                <View style={{marginTop:60}}>
                <Typography variant="body2"color={palette.M_3_SYS_ON_BACKGROUND}>
                    ۷- تصویر متعلق به آگهی دیگری در همین سامانه نباشد.
                </Typography>
            </View>

            </View>
            <View style={{marginHorizontal:16}}>
                <HorizontalSeparator margin={20}/>
            </View>

        </View>

    )

}