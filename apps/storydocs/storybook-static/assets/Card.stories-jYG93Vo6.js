import{a,j as e}from"./jsx-runtime-CUEGZZF9.js";import{u as l,o as d,y as m,z as p,D as u,p as h,t as f,E as g,B as x,F as N}from"./index--X1B5bpF.js";import"./index-DogsOklH.js";import"./extends-dGVwEr9R.js";import"./index-MroJ3egt.js";import"./index-polp_dyw.js";/**
 * @license lucide-react v0.368.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const C=l("BellRing",[["path",{d:"M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9",key:"1qo2s2"}],["path",{d:"M10.3 21a1.94 1.94 0 0 0 3.4 0",key:"qgo35s"}],["path",{d:"M4 2C2.8 3.7 2 5.7 2 8",key:"tap9e0"}],["path",{d:"M22 8c0-2.3-.8-4.3-2-6",key:"5bb3ad"}]]),v=[{title:"Your call has been confirmed.",description:"1 hour ago"},{title:"You have a new message!",description:"1 hour ago"},{title:"Your subscription is expiring soon!",description:"2 hours ago"}],M={title:"Radix Components/Card",component:d,tags:["autodocs"],argTypes:{}},s={render:o=>a(d,{className:"w-[380px]",...o,children:[a(m,{children:[e(p,{children:"Notifications"}),e(u,{children:"You have 3 unread messages."})]}),a(h,{className:"grid gap-4",children:[a("div",{className:" flex items-center space-x-4 rounded-md border p-4",children:[e(C,{}),a("div",{className:"flex-1 space-y-1",children:[e("p",{className:"text-sm font-medium leading-none",children:"Push Notifications"}),e("p",{className:"text-sm text-muted-foreground",children:"Send notifications to device."})]}),e(f,{})]}),e("div",{children:v.map((n,c)=>a("div",{className:"mb-4 grid grid-cols-[25px_1fr] items-start pb-4 last:mb-0 last:pb-0",children:[e("span",{className:"flex h-2 w-2 translate-y-1 rounded-full bg-sky-500"}),a("div",{className:"space-y-1",children:[e("p",{className:"text-sm font-medium leading-none",children:n.title}),e("p",{className:"text-sm text-muted-foreground",children:n.description})]})]},c))})]}),e(g,{children:a(x,{className:"w-full",children:[e(N,{className:"mr-2 h-4 w-4"})," Mark all as read"]})})]})};var t,i,r;s.parameters={...s.parameters,docs:{...(t=s.parameters)==null?void 0:t.docs,source:{originalSource:`{
  render: args => <Card className={"w-[380px]"} {...args}>
    <CardHeader>
      <CardTitle>Notifications</CardTitle>
      <CardDescription>You have 3 unread messages.</CardDescription>
    </CardHeader>
    <CardContent className="grid gap-4">
      <div className=" flex items-center space-x-4 rounded-md border p-4">
        <BellRing />
        <div className="flex-1 space-y-1">
          <p className="text-sm font-medium leading-none">
            Push Notifications
          </p>
          <p className="text-sm text-muted-foreground">
            Send notifications to device.
          </p>
        </div>
        <Switch />
      </div>
      <div>
        {notifications.map((notification, index) => <div key={index} className="mb-4 grid grid-cols-[25px_1fr] items-start pb-4 last:mb-0 last:pb-0">
            <span className="flex h-2 w-2 translate-y-1 rounded-full bg-sky-500" />
            <div className="space-y-1">
              <p className="text-sm font-medium leading-none">
                {notification.title}
              </p>
              <p className="text-sm text-muted-foreground">
                {notification.description}
              </p>
            </div>
          </div>)}
      </div>
    </CardContent>
    <CardFooter>
      <Button className="w-full">
        <Check className="mr-2 h-4 w-4" /> Mark all as read
      </Button>
    </CardFooter>
  </Card>
}`,...(r=(i=s.parameters)==null?void 0:i.docs)==null?void 0:r.source}}};const S=["Default"];export{s as Default,S as __namedExportsOrder,M as default};
