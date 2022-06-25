import Client from "app/modules/ClientModules";
import Admin from "app/modules/AdminModules";
import { OFFLINE_PATH_CLIENT } from "./routes-coursesoffline";
import { ONLINE_PATH_CLIENT } from "./routes-coursesonline";

// PATH FOR MODULES CLIENT
export const URL_PATH_CLIENT = {
  HOME: "/",
  LOGIN: "/dang-nhap",
  REGISTER: "/dang-ky",
  ACCOUNT_DETAIL: "/thong-tin-tai-khoan/:screen",
  MRVAS: "/lpe/mr-vas",
  MSLAHAGIANGTHANH: "/lpe/ms-la-ha-giang-thanh",
  VISIONANDMISSION: "/lpe/tam-nhin-su-menh-lpe",
  RULES: "/lpe/noi-quy-quy-dinh",
  COURSE: "/chuong-trinh-huan-luyen",
  COURSEMEDIA: "/chuong-trinh-huan-luyen/media",
  RECRUITMENT: "/lpe/tuyen-dung",
  COURSEONLINE: "/chuong-trinh-huan-luyen/online",
  COURSEOFFLINE: "/chuong-trinh-huan-luyen/offline",
  CONFIRMREGISTER: "/xac-nhan-dang-ky/:token",
  CONFIRMFORGOTPASSWORD: "/xac-nhan-quen-mat-khau/:token",
  FORGOTPASSWORD: "/quen-mat-khau",
  BLOG_LIST: "/tram-doc-cam",
  BLOG_DETAIL: "/tram-doc-cam/:url",
  LIFE_MAP: "/life-map",
  PERFORMANCE: "/hop-tac/toi-uu-thanh-tich",
  CORPORATION: "/hop-tac/huan-luyen-doanh-nghiep",
  EDUCATION: "/hop-tac/dao-tao-the-he-tre",
  COACH: "/hop-tac/tu-van-tri-lieu-ca-nhan",
  DEMO: "/demo",
};

// PATH FOR MODULES ADMIN
export const URL_PATH_ADMIN = {
  HOME: "/",
  USER_MANAGER: "/quan-ly-nguoi-dung",
  PRODUCT_MANAGER: "/quan-ly-san-pham",
  ADD_USER: "/them-nguoi-dung",
  BLOG_EDIT: "/sua-bai",
  ADD_POST: "/them-bai-viet",
  BLOG_MANAGER: "/quan-ly-bai-viet",
};

// Public Pages for HOME Template
export const publicRoutes = [
  {
    component: Client.Demo,
    exact: true,
    path: URL_PATH_CLIENT.DEMO,
  },
  {
    component: Client.AccountDetail,
    exact: true,
    path: URL_PATH_CLIENT.ACCOUNT_DETAIL,
  },
  {
    component: Client.Home,
    exact: true,
    path: URL_PATH_CLIENT.HOME,
  },
  {
    component: Client.Login,
    exact: true,
    path: URL_PATH_CLIENT.LOGIN,
  },
  {
    component: Client.MrVas,
    exact: true,
    path: URL_PATH_CLIENT.MRVAS,
  },
  {
    component: Client.MsLaHaGiangThanh,
    exact: true,
    path: URL_PATH_CLIENT.MSLAHAGIANGTHANH,
  },
  {
    component: Client.VisionPage,
    exact: true,
    path: URL_PATH_CLIENT.VISIONANDMISSION,
  },
  {
    component: Client.Rules,
    exact: true,
    path: URL_PATH_CLIENT.RULES,
  },
  {
    component: Client.Course,
    exact: true,
    path: URL_PATH_CLIENT.COURSE,
  },
  {
    component: Client.CourseOnline,
    exact: true,
    path: URL_PATH_CLIENT.COURSEONLINE,
  },
  {
    component: Client.CourseOffline,
    exact: true,
    path: URL_PATH_CLIENT.COURSEOFFLINE,
  },
  {
    component: Client.CourseOfflinePP,
    exact: true,
    path: OFFLINE_PATH_CLIENT.khoa1,
  },
  {
    component: Client.CourseOfflinePR,
    exact: true,
    path: OFFLINE_PATH_CLIENT.khoa2,
  },
  {
    component: Client.CourseOfflineIYL,
    exact: true,
    path: OFFLINE_PATH_CLIENT.khoa3,
  },
  {
    component: Client.CourseOfflinePH,
    exact: true,
    path: OFFLINE_PATH_CLIENT.khoa4,
  },
  {
    component: Client.CourseOfflineMOE,
    exact: true,
    path: OFFLINE_PATH_CLIENT.khoa5,
  },
  {
    component: Client.CourseOfflineCOA,
    exact: true,
    path: OFFLINE_PATH_CLIENT.khoa6,
  },
  {
    component: Client.CourseOfflineBAV,
    exact: true,
    path: OFFLINE_PATH_CLIENT.khoa7,
  },
  {
    component: Client.CourseOfflineLEADERSHIP,
    exact: true,
    path: OFFLINE_PATH_CLIENT.khoa8,
  },
  {
    component: Client.CourseOfflineIDENTITY,
    exact: true,
    path: OFFLINE_PATH_CLIENT.khoa9,
  },
  {
    component: Client.CourseOfflineGRADUATE,
    exact: true,
    path: OFFLINE_PATH_CLIENT.khoa10,
  },
  {
    component: Client.CourseOfflineOAC,
    exact: true,
    path: OFFLINE_PATH_CLIENT.OAC,
  },
  {
    component: Client.CourseOfflineLTC,
    exact: true,
    path: OFFLINE_PATH_CLIENT.LTC,
  },
  {
    component: Client.CourseOfflinePAR,
    exact: true,
    path: OFFLINE_PATH_CLIENT.PAR,
  },
  {
    component: Client.CourseOfflineICPC,
    exact: true,
    path: OFFLINE_PATH_CLIENT.ICPC,
  },
  {
    component: Client.CourseOfflineITTC,
    exact: true,
    path: OFFLINE_PATH_CLIENT.ITTC,
  },
  {
    component: Client.CourseOnlineRUNFASTER,
    exact: true,
    path: ONLINE_PATH_CLIENT.RUNFASTER,
  },
  {
    component: Client.CourseOnlineCCS,
    exact: true,
    path: ONLINE_PATH_CLIENT.CCS,
  },
  {
    component: Client.CourseOnlineRFREGISTER,
    exact: true,
    path: ONLINE_PATH_CLIENT.RFREGISTER,
  },
  {
    component: Client.CourseOnlineBFW,
    exact: true,
    path: ONLINE_PATH_CLIENT.BFW,
  },
  {
    component: Client.CourseOnlineVL,
    exact: true,
    path: ONLINE_PATH_CLIENT.VL,
  },
  {
    component: Client.CourseMedia,
    exact: true,
    path: URL_PATH_CLIENT.COURSEMEDIA,
  },
  {
    component: Client.Register,
    exact: true,
    path: URL_PATH_CLIENT.REGISTER,
  },

  {
    component: Client.Recruitment,
    exact: true,
    path: URL_PATH_CLIENT.RECRUITMENT,
  },
  {
    component: Client.ConfirmRegister,
    exact: true,
    path: URL_PATH_CLIENT.CONFIRMREGISTER,
  },
  {
    component: Client.VerifyForgotPassword,
    exact: true,
    path: URL_PATH_CLIENT.CONFIRMFORGOTPASSWORD,
  },
  {
    component: Client.ForgotPassword,
    exact: true,
    path: URL_PATH_CLIENT.FORGOTPASSWORD,
  },
  {
    component: Client.BlogList,
    exact: true,
    path: URL_PATH_CLIENT.BLOG_LIST,
  },
  {
    component: Client.BlogDetail,
    exact: true,
    path: URL_PATH_CLIENT.BLOG_DETAIL,
  },
  {
    component: Client.LifeMap,
    exact: true,
    path: URL_PATH_CLIENT.LIFE_MAP,
  },
  {
    component: Client.Coach,
    exact: true,
    path: URL_PATH_CLIENT.COACH,
  },
  {
    component: Client.Performance,
    exact: true,
    path: URL_PATH_CLIENT.PERFORMANCE,
  },
  {
    component: Client.Education,
    exact: true,
    path: URL_PATH_CLIENT.EDUCATION,
  },
  {
    component: Client.Corporation,
    exact: true,
    path: URL_PATH_CLIENT.CORPORATION,
  },
];

// Only for Admin Pages
export const adminRoutes = [
  {
    component: Admin.Home,
    exact: true,
    path: "/admin" + URL_PATH_ADMIN.HOME,
  },
  {
    component: Admin.UserManager,
    exact: true,
    path: "/admin" + URL_PATH_ADMIN.USER_MANAGER,
  },
  {
    component: Admin.ProductsManager,
    exact: true,
    path: "/admin" + URL_PATH_ADMIN.PRODUCT_MANAGER,
  },

  {
    component: Admin.AddUser,
    exact: true,
    path: "/admin" + URL_PATH_ADMIN.ADD_USER,
  },
  {
    component: Admin.AddPost,
    exact: true,
    path: "/admin" + URL_PATH_ADMIN.ADD_POST,
  },
  {
    component: Admin.BlogsManager,
    exact: true,
    path: "/admin" + URL_PATH_ADMIN.BLOG_MANAGER,
  },
  {
    component: Admin.EditPost,
    exact: true,
    path: "/admin" + URL_PATH_ADMIN.BLOG_EDIT,
  },
];
