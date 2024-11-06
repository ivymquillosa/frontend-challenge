import{j as e,a as l}from"./jsx-runtime-CUEGZZF9.js";import{l as o,m,n as c,o as d,p as i,q as p,r as u}from"./index--X1B5bpF.js";import"./index-DogsOklH.js";import"./extends-dGVwEr9R.js";import"./index-MroJ3egt.js";import"./index-polp_dyw.js";const j={title:"Radix Components/Carousel",component:o,tags:["autodocs"],argTypes:{}},a={render:C=>e("div",{className:"px-10",children:l(o,{className:"w-full max-w-xs",children:[e(m,{children:Array.from({length:5}).map((x,s)=>e(c,{children:e("div",{className:"p-1",children:e(d,{children:e(i,{className:"flex aspect-square items-center justify-center p-6",children:e("span",{className:"text-4xl font-semibold",children:s+1})})})})},s))}),e(p,{}),e(u,{})]})})};var r,n,t;a.parameters={...a.parameters,docs:{...(r=a.parameters)==null?void 0:r.docs,source:{originalSource:`{
  render: args => <div className='px-10'>
      <Carousel className="w-full max-w-xs">
        <CarouselContent>
          {Array.from({
          length: 5
        }).map((_, index) => <CarouselItem key={index}>
              <div className="p-1">
                <Card>
                  <CardContent className="flex aspect-square items-center justify-center p-6">
                    <span className="text-4xl font-semibold">{index + 1}</span>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>)}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
}`,...(t=(n=a.parameters)==null?void 0:n.docs)==null?void 0:t.source}}};const w=["Default"];export{a as Default,w as __namedExportsOrder,j as default};
