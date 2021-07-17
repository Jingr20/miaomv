export default{
    path: '/cinema',
    component: () => import('@/views/Cinema'),
    children:[
        { path:'city',component: () => import('@/components/CinemaList')},
        { path:'brand',component: () => import('@/components/CinemaList')},
        { path:'feature',component: () => import('@/components/CinemaList')},
        { path:'/cinema',redirect:'/cinema/city'}
    ]
}