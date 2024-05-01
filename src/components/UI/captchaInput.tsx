import {useEffect, useState} from "react";
import {Grid, Image, TextInput} from "@mantine/core";
import {RefreshIcon} from "../../assets";
import {useTranslation} from "react-i18next";
import captcha from "../../assets/images/captcha.png";
// import {Auth} from "../../utiles/services";

const CaptchaInput = ({value}: { value: object }) => {
    const {t} = useTranslation();
    const [captchaImage, setCaptchaImage] = useState('');

    useEffect(() => {
        handleCaptcha();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    const handleCaptcha = () => {
        // Auth.getCaptcha().then((response) => {
        //     setCaptchaImage(URL.createObjectURL(response as Blob));
        // })
        setCaptchaImage(captcha);
    }
    return (
        <Grid gutter={'md'} display="flex" justify="flex-start" align="center">
            <Grid.Col span={5}>
                <TextInput
                    mt='md'
                    label={t('common:input_captcha')}
                    {...value}
                    height="3rem"
                />
            </Grid.Col>
            <Grid.Col span={7} mt="1rem">
                <div className="captcha-image-outer">
                    <div className="captcha-refresh" onClick={handleCaptcha}><RefreshIcon/></div>
                    <Image src={captchaImage} fit="cover" h="48px" w="auto" alt="captch image"/>
                </div>
            </Grid.Col>
        </Grid>
    );
}

export default CaptchaInput;
