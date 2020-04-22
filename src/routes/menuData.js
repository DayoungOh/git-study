import Users from "../pages/Users"
import Contents from "../pages/Contents"
import Temp from "../pages/Temp"

const menuData = [
    {
        name: '회원관리',
        path: '/main/users',
        component: Users,
        visible: false,
        submenu: [
            {
                name: '회원현황',
                path: '/main/users/1',
                component: Temp,
                visible: true,
            },
            {
                name: '서비스 신청내역',
                path: '/main/users/2',
                component: Temp,
                visible: true,
            },
            {
                name: '상권분석 이용내역',
                path: '/main/users/3',
                component: Temp,
                visible: false,
            },
            {
                name: '입추/업추 이용내역',
                path: '/main/users/4',
                component: Temp,
                visible: false,
            },
            {
                name: '사업자 회원현황',
                path: '/main/users/5',
                component: Temp,
                visible: false,
            },
            {
                name: '사업자 서비스 신청내역',
                path: '/main/users/6',
                component: Temp,
                visible: false,
            },
            {
                name: '사업자 상권분석 이용내역',
                path: '/main/users/7',
                component: Temp,
                visible: false,
            },
            {
                name: '사업자 입추/업추 이용내역',
                path: '/main/users/8',
                component: Temp,
                visible: false,
            },
            {
                name: '제휴사 현황',
                path: '/main/users/9',
                component: Temp,
                visible: false,
            },
            {
                name: '제휴사 제휴서비스 이용현황',
                path: '/main/users/10',
                component: Temp,
                visible: false,
            },
            {
                name: '제휴사 서비스 신청내역',
                path: '/main/users/11',
                component: Temp,
                visible: false,
            },
            {
                name: '제휴사 상권분석 이용내역',
                path: '/main/users/12',
                component: Temp,
                visible: false,
            },
            {
                name: '제휴사 입추/업추 이용내역',
                path: '/main/users/13',
                component: Temp,
                visible: false,
            },
            {
                name: 'FRAN 회원현황',
                path: '/main/users/14',
                component: Temp,
                visible: false,
            },
            {
                name: 'FRAN 제휴사현황',
                path: '/main/users/15',
                component: Temp,
                visible: false,
            },
        ],
    },
    {
        name: '컨텐츠관리',
        path: '/main/contents',
        component: Contents,
        visible: true,
        submenu: [
            {
                name: '전문가보고서',
                path: '/main/contents/1',
                component: Temp,
                visible: true,
            },
            {
                name: '창업정보관리',
                path: '/main/contents/2',
                component: Temp,
                visible: true,
            },
            {
                name: '창업뉴스',
                path: '/main/contents/3',
                component: Temp,
                visible: false,
            },
            {
                name: '창업지식',
                path: '/main/contents/4',
                component: Temp,
                visible: false,
            },
            {
                name: '창업영상',
                path: '/main/contents/5',
                component: Temp,
                visible: false,
            },
            {
                name: '창업아이템',
                path: '/main/contents/6',
                component: Temp,
                visible: false,
            },
        ],
    },
    {
        name: '고객지원',
        path: '/main/clients',
        component: Contents,
        visible: true,
        submenu: [
            {
                name: '공지사항',
                path: '/main/clients/1',
                component: Temp,
                visible: true,
            },
            {
                name: '상담게시판',
                path: '/main/clients/2',
                component: Temp,
                visible: true,
            },
            {
                name: 'FAQ',
                path: '/main/clients/3',
                component: Temp,
                visible: false,
            },
            {
                name: '이벤트 관리',
                path: '/main/clients/4',
                component: Temp,
                visible: false,
            },
            {
                name: '블로그 이벤트',
                path: '/main/clients/5',
                component: Temp,
                visible: false,
            },
            {
                name: '이용후기 이벤트',
                path: '/main/clients/6',
                component: Temp,
                visible: false,
            },
            {
                name: '상권분석 상담',
                path: '/main/clients/7',
                component: Temp,
                visible: false,
            },
        ],
    },
    {
        name: '통계관리',
        path: '/main/statistics',
        component: Contents,
        visible: true,
        submenu: [
            {
                name: '회원현황통계',
                path: '/main/statistics/1',
                component: Temp,
                visible: true,
            },
            {
                name: '접속현황통계',
                path: '/main/statistics/2',
                component: Temp,
                visible: true,
            },
            {
                name: '제휴사접속현황통계',
                path: '/main/statistics/3',
                component: Temp,
                visible: false,
            },
            {
                name: '유입채널통계',
                path: '/main/statistics/4',
                component: Temp,
                visible: false,
            },
            {
                name: '매출현황통계',
                path: '/main/statistics/5',
                component: Temp,
                visible: false,
            },
            {
                name: '서비스 이용현황통계',
                path: '/main/statistics/6',
                component: Temp,
                visible: false,
            },
            {
                name: '유인컨텐츠 이용현황',
                path: '/main/statistics/7',
                component: Temp,
                visible: false,
            },
            {
                name: '지역별 이용현황',
                path: '/main/statistics/8',
                component: Temp,
                visible: false,
            },
            {
                name: '업종별 이용현황',
                path: '/main/statistics/9',
                component: Temp,
                visible: false,
            },
            {
                name: '지역/업종별 이용현황',
                path: '/main/statistics/10',
                component: Temp,
                visible: false,
            },
        ],
    },
    {
        name: '사용자관리',
        path: '/main/admin',
        component: Contents,
        visible: true,
        submenu: [
            {
                name: '사용자 관리',
                path: '/main/admin/1',
                component: Temp,
                visible: true,
            },
            {
                name: '사용자 권한관리',
                path: '/main/admin/2',
                component: Temp,
                visible: true,
            },
            {
                name: '권한코드 정의',
                path: '/main/admin/3',
                component: Temp,
                visible: false,
            },
        ],
    },
    {
        name: '상품관리',
        path: '/main/goods',
        component: Contents,
        visible: true,
        submenu: [
            {
                name: '상품관리',
                path: '/main/goods/1',
                component: Temp,
                visible: true,
            },
            {
                name: '쿠폰관리',
                path: '/main/goods/2',
                component: Temp,
                visible: true,
            },
            {
                name: '권한코드 정의',
                path: '/main/goods/3',
                component: Temp,
                visible: false,
            },
        ],
    },
];

export default menuData;