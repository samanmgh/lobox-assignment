import {lazy} from 'react';
import i18next from "../../utiles/i18n/config.ts";
import {createBrowserRouter, redirect} from "react-router-dom";
import {StaffIcon, BotIcon, ChatIcon, ReportIcon, UserIcon, ArrowLeftIcon, UploadIcon} from "../../assets";
// const Dashboard = lazy(() => import('../../pages/Dashboard'));
const StaffPage = lazy(() => import('../../pages/StaffManagement'));
const BotManagement = lazy(() => import('../../pages/BotManagement'));
const QuestionPage = lazy(() => import('../../pages/BotManagement/questions'));
const AgentManagement = lazy(() => import('../../pages/BotManagement/agentManagement'));
const UploadFile = lazy(() => import('../../pages/UploadFile'));
const ChatManagement = lazy(() => import('../../pages/ChatManagement'));
const ChatPage = lazy(() => import('../../pages/ChatManagement/chat'));
const UserPage = lazy(() => import('../../pages/UserManagement'));
const ReportPage = lazy(() => import('../../pages/Report'));
const LoginPage = lazy(() => import("../../pages/Login"));
const AppLayout = lazy(() => import("../../layout/AppLayout.tsx"));
const AuthLayout = lazy(() => import("../../layout/AuthLayout.tsx"));
const authLoader = () => {
    const access_token = window && window.localStorage.getItem('access_token');
    if (access_token) return redirect('/staff-management');
    return null;
};
const userLoader = () => {
    const access_token = window && localStorage.getItem('access_token');
    if (!access_token) return redirect('/login');
    return null;
}
const Routes = createBrowserRouter([
    {
        Component: AppLayout,
        loader: userLoader,
        children: [
            // {
            //     path: '/',
            //     Component: Dashboard,
            //     handle: {'label': i18next.t('routes:dashboard'), 'icon': StaffIcon}
            // },
            {
                path: '/staff-management',
                Component: StaffPage,
                handle: {'label': i18next.t('routes:staff_management'), 'icon': StaffIcon}
            },
            {
                path: '/user-management',
                Component: UserPage,
                handle: {'label': i18next.t('routes:user_management'), 'icon': UserIcon}
            },
            {
                path: '/report',
                Component: ReportPage,
                handle: {'label': i18next.t('routes:report'), 'icon': ReportIcon}
            },
            {
                path: '/bot-management',
                handle: {'label': i18next.t('routes:bot_management'), 'icon': BotIcon},
                children: [
                    {
                        Component: BotManagement,
                        index: true,
                        handle: {label: ''}
                    },
                    {
                        path: ":id",
                        Component: QuestionPage,
                        handle: {label: ''}
                    },
                    {
                        path: 'agent-management',
                        Component: AgentManagement,
                        handle: {label: ''}
                    }
                ],
            },
            {
                path: '/chat-management',
                handle: {'label': i18next.t('routes:chat_management'), 'icon': ChatIcon},
                children: [
                    {
                        Component: ChatManagement,
                        index: true,
                        handle: {'label': ''}
                    },
                    {
                        path: ':id',
                        Component: ChatPage,
                        handle: {'label': i18next.t('routes:chat_management_page'), 'icon': ArrowLeftIcon}
                    },
                ]
            },
            {
                path: '/upload-file',
                Component: UploadFile,
                handle: {'label': i18next.t('routes:upload_file'), 'icon': UploadIcon},
            },
        ],
    },
    {
        Component: AuthLayout,
        loader: authLoader,
        children: [
            {
                path: '/login',
                Component: LoginPage,
            },
        ],
    },
]);

export default Routes;
