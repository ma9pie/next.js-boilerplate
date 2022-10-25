import Axios from "axios";
import Cookies from "js-cookie";
import _includes from "lodash/includes";
import ModalUtils from "@/utils/ModalUtils";

let isOpenModal = false;

const headers = {
  "Content-Type": "application/json",
};

const Rest = Axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_URL,
  timeout: 15000,
  headers: headers,
});

Rest.interceptors.request.use(
  (req) => {
    return req;
  },
  (error) => {
    console.log("request error");
    return Promise.reject(error);
  }
);

Rest.interceptors.response.use(
  (res) => {
    const code = res.data.code;
    const message = res.data.message;

    console.log(
      "\n============================ REST LOG START ============================="
    );
    console.log(res.request.responseURL);
    console.log(res.data);
    console.log(
      "============================ REST LOG END ===============================\n\n"
    );
    return Promise.resolve(res);
  },
  (error) => {
    console.log(
      "############################ REST ERROR #################################"
    );
    console.log(error);
    console.log(
      "############################ REST END   #################################"
    );

    if (!isOpenModal) {
      ModalUtils.openAlert({
        message: `서버오류가\n 발생하였습니다.`,
        onAfterClose: () => {
          isOpenModal = false;
        },
      });
      isOpenModal = true;
    }

    // const errResult = error.response;

    // if (errResult) {
    //   switch (errResult.status) {
    //     case 500:
    //       ModalUtils.openAlert({
    //         title: "서버오류",
    //         message: `코드 : ${errResult.data.code}\n${errResult.data.message}`,
    //       });
    //       break;

    //     case 502:
    //       ModalUtils.openAlert({
    //         title: "서버오류",
    //         message: `Bad gateway (${errResult.status})\n${errResult.request.responseURL}`,
    //       });
    //       break;

    //     default:
    //       break;
    //   }
    // }

    return Promise.reject(error);
  }
);

export default Rest;
