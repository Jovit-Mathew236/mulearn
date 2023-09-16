import { NavigateFunction } from "react-router-dom";
import { privateGateway, publicGateway } from "@/MuLearnServices/apiGateways";
import { KKEMRoutes, dashboardRoutes } from "@/MuLearnServices/urls";

export const KKEMLogin = (
    emailOrMuid: string,
    password: string,
    toast: ToastAsPara,
    navigate: NavigateFunction,
    setIsLoading: UseStateFunc<boolean>,
    redirectPath: string,
    param?: string
) => {
    setIsLoading(true);
    publicGateway
        .post(KKEMRoutes.userLogin, { emailOrMuid, password, param })
        .then(response => {
            if (response.data.hasError == false) {
                localStorage.setItem(
                    "accessToken",
                    response.data.response.accessToken
                );
                localStorage.setItem(
                    "refreshToken",
                    response.data.response.refreshToken
                );
                toast({
                    title: "Login Successful",
                    description: "You have been logged in successfully",
                    status: "success",
                    duration: 3000,
                    isClosable: true
                });
                if (response.data.response.data.verified) {
                    toast({
                        title: "Verification Successful",
                        description:
                            "Your account has been verified successfully and connected with KKEM",
                        status: "success",
                        duration: 3000,
                        isClosable: true
                    });
                } else if (response.data.response.data.verified) {
                    toast({
                        title: "Verification Failed",
                        description:
                            "There was an error while verifying your account. Please try again later.",
                        status: "success",
                        duration: 3000,
                        isClosable: true
                    });
                }
                privateGateway
                    .get(dashboardRoutes.getInfo)
                    .then(response => {
                        //console.log(response);
                        localStorage.setItem(
                            "userInfo",
                            JSON.stringify(response.data.response)
                        );
                        if (response.data.response.exist_in_guild) {
                            navigate("/dashboard/learning-circle");
                        } else {
                            if (redirectPath) {
                                // navigate(`/${redirectPath}`);
                                navigate("/dashboard/learning-circle");
                            } else {
                                navigate("/dashboard/learning-circle");
                            }
                        }
                    })
                    .catch(error => {
                        console.log(error);
                        setIsLoading(false);
                    });
            }
        })
        .catch(error => {
            console.log(error);
            setIsLoading(false);
            toast({
                title: error.response.data.message.general[0],
                status: "error",
                duration: 3000,
                isClosable: true
            });
        });
};
