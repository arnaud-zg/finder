import NextRouter from 'next/router'
import NProgress from 'nprogress'

NextRouter.events.on('routeChangeStart', NProgress.start)
NextRouter.events.on('routeChangeComplete', NProgress.done)
NextRouter.events.on('routeChangeError', NProgress.done)
