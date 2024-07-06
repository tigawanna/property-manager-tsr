import { viewerqueryOptions } from '@/lib/tanstack/query/use-viewer'
import { createFileRoute, redirect } from '@tanstack/react-router'

export const Route = createFileRoute('/admin/_layout')({
  component: () => <div>Hello /admin/_layout!</div>,
  async beforeLoad(ctx) {
    const user = await ctx.context.queryClient.fetchQuery(viewerqueryOptions)
    if(!user?.record){
      throw  redirect({
        to: '/auth',
        search:{
          returnTo:ctx.location.pathname
        }
      })
    }
  },
})
