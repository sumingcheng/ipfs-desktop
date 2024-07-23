"use strict";(self.webpackChunkipfs_webui=self.webpackChunkipfs_webui||[]).push([[793],{35687:(e,t,a)=>{a.d(t,{A:()=>h});var n=a(65043),r=a(13026),l=a(14927),s=a(91069),c=a(51466),o=a(70231),i=a(93031),u=a(49684),m=a(32333);function p(){return p=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)({}).hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},p.apply(null,arguments)}const d=e=>{let{command:t,t:a,onLeave:r,className:o,downloadConfig:d,...h}=e;return n.createElement(l.aF,p({},h,{className:o,onCancel:r,style:{maxWidth:"40em"}}),n.createElement(l.cw,{Icon:s.A},n.createElement("p",{className:"charcoal w-80 center",style:{lineHeight:"1.3"}},a("app:cliModal.description")),n.createElement("p",{className:"charcoal-muted w-90 center"},t&&t===m.Kd[m.p5.UPDATE_IPFS_CONFIG]()?a("settings:cliModal.extraNotesJsonConfig"):"",t&&t.startsWith(m.fc.PIN_OBJECT)?a("files:cliModal.extraNotesPinning"):""),n.createElement("div",null,n.createElement(i.A,{className:"tl",title:"Shell"},n.createElement("code",{className:"db"},n.createElement("b",{className:"no-select"},"$ "),t)))),n.createElement(l.NS,null,n.createElement("div",null,n.createElement(c.A,{className:"ma2 tc",bg:"bg-gray",onClick:r},a("app:actions.close"))),n.createElement("div",{className:"flex items-center"},t&&t===m.Kd[m.p5.UPDATE_IPFS_CONFIG]()?n.createElement(u.A,{onClick:d,className:"dib fill-link pointer",style:{height:38}}):n.createElement("div",null),n.createElement(c.A,{className:"ma2 tc",onClick:()=>{return e=t,void navigator.clipboard.writeText(e).then((()=>{r()}));var e}},a("app:actions.copy")))))};d.defaultProps={className:""};const h=(0,r.N)("doOpenCliTutorModal","selectIsCliTutorModalOpen","selectIsCliTutorModeEnabled",(e=>{let{t:t,filesPage:a,isCliTutorModeEnabled:r,onLeave:l,isCliTutorModalOpen:c,command:i,config:u,showIcon:m,doOpenCliTutorModal:p}=e;return r?a?n.createElement(d,{className:"outline-0",onLeave:l,t:t,command:i}):n.createElement(n.Fragment,null,m?n.createElement(s.A,{onClick:()=>p(!0),className:"dib fill-link pointer mh2",style:{height:44}}):n.createElement("div",null),n.createElement(o.A,{show:c,onLeave:()=>p(!1)},n.createElement(d,{className:"outline-0",onLeave:()=>p(!1),t:t,command:i,downloadConfig:()=>(e=>{const t=window.URL.createObjectURL(new Blob([e])),a=document.createElement("a");a.style.display="none",a.href=t,a.download="settings.json",document.body.appendChild(a),a.click(),window.URL.revokeObjectURL(t)})(u)}))):null}))},14927:(e,t,a)=>{a.d(t,{NS:()=>s,aF:()=>o,cw:()=>c});var n=a(65043),r=a(46943);function l(){return l=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)({}).hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},l.apply(null,arguments)}const s=e=>{let{justify:t,className:a,children:r,...s}=e;return n.createElement("div",l({className:"flex justify-".concat(t," pa2 ").concat(a),style:{backgroundColor:"#f4f6f8"}},s),r)};s.defaultProps={justify:"between",className:""};const c=e=>{let{className:t,Icon:a,title:r,children:s,...c}=e;return n.createElement("div",l({className:"ph4 pv3 tc ".concat(t)},c),a&&n.createElement("div",{className:"center bg-snow br-100 flex justify-center items-center",style:{width:"80px",height:"80px"}},n.createElement(a,{className:"fill-gray w3"})),n.createElement("p",{className:"charcoal fw6 truncate"},r),s)};c.defaultProps={className:""};const o=e=>{let{onCancel:t,children:a,className:s,...c}=e;return n.createElement("div",l({className:"".concat(s," bg-white w-80 shadow-4 sans-serif relative"),style:{maxWidth:"34em"}},c),t&&n.createElement(r.A,{className:"absolute pointer w2 h2 top-0 right-0 fill-gray",onClick:t}),a)};o.defaultProps={onCancel:null,className:""}},70231:(e,t,a)=>{a.d(t,{A:()=>c});var n=a(65043),r=a(69450);function l(){return l=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)({}).hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},l.apply(null,arguments)}function s(e){let{children:t,show:a,onLeave:s,className:c,hidden:o,...i}=e;return n.createElement(r.aF,l({},i,{show:a,className:"".concat(c," fixed top-0 left-0 right-0 bottom-0 z-max flex items-center justify-around"),renderBackdrop:e=>n.createElement("div",l({className:"fixed top-0 left-0 right-0 bottom-0 bg-black o-50",hidden:o},e)),onKeyDown:e=>{"Escape"===e.key&&(e.stopPropagation(),e.nativeEvent.stopImmediatePropagation(),s())},onBackdropClick:s}),t)}s.defaultProps={className:""};const c=s},93031:(e,t,a)=>{a.d(t,{A:()=>s});var n=a(65043),r=a(64600),l=a.n(r);const s=e=>{let{title:t="Shell",children:a,className:r}=e;return n.createElement("div",{className:l()("br1 overflow-hidden",r)},n.createElement("div",{className:"f7 mb0 sans-serif ttu tracked charcoal pv1 pl2 bg-black-20"},t),n.createElement("div",{className:"bg-black-70 snow pa2 f7 lh-copy monospace nowrap overflow-x-auto"},a))}},86533:(e,t,a)=>{a.d(t,{A:()=>d});var n=a(65043),r=a(65173),l=a.n(r),s=a(51466),c=a(14927),o=a(1010),i=a(16470);function u(){return u=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)({}).hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},u.apply(null,arguments)}function m(e,t,a){return(t=function(e){var t=function(e,t){if("object"!=typeof e||!e)return e;var a=e[Symbol.toPrimitive];if(void 0!==a){var n=a.call(e,t||"default");if("object"!=typeof n)return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==typeof t?t:t+""}(t))in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}class p extends n.Component{constructor(e){super(e),m(this,"onChange",(e=>{let t=e.target.value;this.props.onChange&&(t=this.props.onChange(t)),this.props.onInputChange&&this.props.onInputChange(t),this.setState({value:t})})),m(this,"onSubmit",(()=>{(!this.props.validate||this.props.validate&&this.props.validate(this.state.value))&&this.props.onSubmit(this.state.value)})),m(this,"onKeyPress",(e=>{"Enter"===e.key&&this.onSubmit()})),this.state={value:e.defaultValue}}get inputClass(){return!this.props.validate||""===this.state.value||this.props.mustBeDifferent&&this.state.value===this.props.defaultValue?"":this.props.error?"b--red-muted focus-outline-red":this.props.validate(this.state.value)?"b--green-muted focus-outline-green":"b--red-muted focus-outline-red"}get isDisabled(){return!!(""===this.state.value||this.props.mustBeDifferent&&this.state.value===this.props.defaultValue)||!!this.props.validate&&!this.props.validate(this.state.value)}render(){const{t:e,onCancel:t,onChange:a,onInputChange:r,mustBeDifferent:l,onSubmit:i,className:m,Icon:p,submitText:d,validate:h,defaultValue:v,description:f,title:g,error:b,loading:w,...y}=this.props;return n.createElement(c.aF,u({},y,{className:m,onCancel:t}),n.createElement(c.cw,{title:g,Icon:p},f&&"object"===typeof f&&f,f&&"string"===typeof f&&n.createElement("p",{className:"charcoal w-90 tl center"},f),n.createElement("input",{onChange:this.onChange,onKeyPress:this.onKeyPress,value:this.state.value,required:!0,className:"input-reset charcoal ba b--black-20 br1 pa2 mb2 db w-90 center focus-outline ".concat(this.inputClass),type:"text"})),n.createElement(c.NS,null,n.createElement(s.A,{className:"ma2 tc",bg:"bg-gray",onClick:t},e("actions.cancel")),n.createElement(s.A,{className:"ma2 tc",bg:"bg-teal",disabled:this.isDisabled,onClick:this.onSubmit},d)),w&&n.createElement("div",{className:"flex items-center justify-center absolute top-0 left-0 right-0 bottom-0"},n.createElement("div",{className:"absolute top-0 left-0 right-0 bottom-0 bg-light-gray o-80"}),n.createElement(o.A,{style:{width:"50%",margin:"auto"}})))}}m(p,"propTypes",{onCancel:l().func.isRequired,onSubmit:l().func.isRequired,onChange:l().func,onInputChange:l().func,title:l().string.isRequired,Icon:l().func.isRequired,description:l().node,submitText:l().string,validate:l().func,defaultValue:l().string,mustBeDifferent:l().bool,loading:l().bool}),m(p,"defaultProps",{className:"",defaultValue:"",submitText:"Save",mustBeDifferent:!1});const d=(0,i.CI)("app")(p)},22917:(e,t,a)=>{a.d(t,{A:()=>o});var n=a(65043),r=a(13026),l=a(44062);function s(){return s=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)({}).hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},s.apply(null,arguments)}function c(e,t,a){return(t=function(e){var t=function(e,t){if("object"!=typeof e||!e)return e;var a=e[Symbol.toPrimitive];if(void 0!==a){var n=a.call(e,t||"default");if("object"!=typeof n)return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==typeof t?t:t+""}(t))in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}const o=e=>{class t extends n.Component{constructor(){super(...arguments),c(this,"handleJoyrideCallback",(e=>{const{doDisableTours:t}=this.props,{action:a,status:n}=e;("close"===a||[l.XQ.FINISHED].includes(n))&&t()}))}render(){return n.createElement(e,s({handleJoyrideCallback:this.handleJoyrideCallback},this.props))}}return(0,r.N)("doDisableTours",t)}},58468:(e,t,a)=>{a.d(t,{A:()=>l});var n=a(65043);function r(){return r=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)({}).hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},r.apply(null,arguments)}const l=function(e){return n.createElement("svg",r({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 100 100"},e),n.createElement("path",{d:"M75 50c0-3.75 1.25-6.25 3.75-8.75s5.625-3.75 8.75-3.75c3.75 0 6.25 1.25 8.75 3.75S100 46.875 100 50s-1.25 6.25-3.75 8.75-5.625 3.75-8.75 3.75-6.25-1.25-8.75-3.75S75 53.125 75 50zm-37.5 0c0-3.75 1.25-6.25 3.75-8.75S46.875 37.5 50 37.5c3.75 0 6.25 1.25 8.75 3.75S62.5 46.875 62.5 50s-1.25 6.25-3.75 8.75S53.125 62.5 50 62.5s-6.25-1.25-8.75-3.75S37.5 53.125 37.5 50zM0 50c0-3.75 1.25-6.25 3.75-8.75s5.625-3.75 8.75-3.75c3.75 0 6.25 1.25 8.75 3.75S25 46.875 25 50s-1.25 6.25-3.75 8.75-5.625 3.75-8.75 3.75-6.25-1.25-8.75-3.75S0 53.125 0 50z"}))}},2181:(e,t,a)=>{a.d(t,{A:()=>l});var n=a(65043);function r(){return r=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)({}).hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},r.apply(null,arguments)}const l=function(e){return n.createElement("svg",r({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 100 100"},e),n.createElement("path",{d:"M41.72 58.28l-2.05-2.04-4.08 4.09-8.18 8.17-4.09 4.09-2.04 6.13 6.13-2.04 4.09-4.09 8.17-8.17 4.09-4.09-2.04-2.05z"}),n.createElement("path",{d:"M78 43.51a1 1 0 00.45-1.64L68.28 31.72l-2-2-8.11-8.1a1 1 0 00-1.64.45 22.66 22.66 0 00-.88 5.64.89.89 0 01-.27.65L39.6 44.05a.93.93 0 01-.81.26 23.39 23.39 0 00-8.52.45 1 1 0 00-.44 1.64l11.89 11.88L53.6 70.17a1 1 0 001.64-.44 23.39 23.39 0 00.45-8.52.93.93 0 01.31-.81l15.69-15.74a.89.89 0 01.65-.27 22.66 22.66 0 005.66-.88z"}))}},91069:(e,t,a)=>{a.d(t,{A:()=>l});var n=a(65043);function r(){return r=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)({}).hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},r.apply(null,arguments)}const l=function(e){return n.createElement("svg",r({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 100 100"},e),n.createElement("path",{d:"M75 24H25.11c-4.19 0-8 4.11-8 8.61v35.26a8.29 8.29 0 008 8.13H75a8.11 8.11 0 007.87-8.13V32.61C82.91 28.55 79.54 24 75 24zm-49.89 3H75c2.74 0 4.87 3 4.87 5.61v1.32H20.09v-1.32c0-2.83 2.49-5.61 5.02-5.61zm-5 39.59V35.93h59.8v30.66zM75 73H25.11a5.28 5.28 0 01-4.95-4.41h59.67A5.09 5.09 0 0175 73z"}),n.createElement("circle",{cx:26.22,cy:30.54,r:1.33}),n.createElement("path",{d:"M30.49 31.88a1.34 1.34 0 10-1.33-1.34 1.34 1.34 0 001.33 1.34zm4.28 0a1.34 1.34 0 10-1.34-1.34 1.34 1.34 0 001.34 1.34zm4.4 19.55l5-5a1.28 1.28 0 00-1.81-1.81l-5.87 5.88a1.3 1.3 0 000 1.84l5.87 5.88a1.28 1.28 0 001.81-1.81zm23.58-.92l-5.88-5.88a1.28 1.28 0 10-1.8 1.81l5 5-5 5a1.28 1.28 0 101.8 1.81l5.88-5.88a1.27 1.27 0 00.38-.92 1.31 1.31 0 00-.38-.94zM51 42.85A1.38 1.38 0 0049.44 44l-2.37 14.41a1.39 1.39 0 002.75.45l2.37-14.41a1.39 1.39 0 00-1.19-1.6z"}))}},49684:(e,t,a)=>{a.d(t,{A:()=>l});var n=a(65043);function r(){return r=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)({}).hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},r.apply(null,arguments)}const l=function(e){return n.createElement("svg",r({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 100 100"},e),n.createElement("path",{d:"M76.3 61.6H23.7c-3.1 0-5.6 2.5-5.6 5.6v7.5c0 3.1 2.5 5.6 5.6 5.6h52.7c3.1 0 5.6-2.5 5.6-5.6v-7.5c-.1-3.1-2.6-5.6-5.7-5.6zm2.4 13.1c0 1.3-1 2.3-2.3 2.3H23.7c-1.3 0-2.3-1-2.3-2.3v-7.5c0-1.3 1-2.3 2.3-2.3h52.7c1.3 0 2.3 1 2.3 2.3v7.5z"}),n.createElement("path",{d:"M64.9 68.8c-1.2 0-2.2 1-2.2 2.2 0 1.2 1 2.2 2.2 2.2 1.2 0 2.2-1 2.2-2.2 0-1.2-1-2.2-2.2-2.2zm0 3.3c-.6 0-1.1-.5-1.1-1.1s.5-1.1 1.1-1.1 1.1.5 1.1 1.1-.5 1.1-1.1 1.1zm7.7-3.3c-1.2 0-2.2 1-2.2 2.2 0 1.2 1 2.2 2.2 2.2s2.2-1 2.2-2.2c0-1.2-1-2.2-2.2-2.2zm0 3.3c-.6 0-1.1-.5-1.1-1.1s.5-1.1 1.1-1.1 1.1.5 1.1 1.1-.5 1.1-1.1 1.1zM50.8 57.2l11.8-11.8c.8-.8.2-2.1-.9-2h-5.9V20.9c0-.7-.5-1.2-1.2-1.2h-9.5c-.7 0-1.2.5-1.2 1.2v22.5H38c-1.1 0-1.6 1.3-.9 2l11.8 11.8c.7.5 1.5.5 1.9 0zM41 45.8h5.4V22.1h7.1v23.7H59l-9 8.9-9-8.9z"}))}},35621:(e,t,a)=>{a.d(t,{A:()=>l});var n=a(65043);function r(){return r=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)({}).hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},r.apply(null,arguments)}const l=function(e){return n.createElement("svg",r({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 100 100"},e),n.createElement("path",{d:"M82.89 25.64l-6.53-6.53a7.79 7.79 0 00-11 .35L23.72 61.1l-4.6 17.19a3.8 3.8 0 001 3.61 3.74 3.74 0 002.64 1.1 3.87 3.87 0 00.95-.12l17.19-4.6 41.64-41.64a7.79 7.79 0 00.35-11zM58 31l13 13-2.28 2.28-12.98-12.96zM26 64.21L37.79 76l-11.16 3L23 75.23zM23 80a.8.8 0 01-.77-.19A.75.75 0 0122 79l.41-1.54 2 2.09zm16.78-4.8L26.83 62.23l27.49-27.49 12.94 12.94zm40.64-40.68l-8 8-12.99-12.89 8.05-8a4.8 4.8 0 016.76-.35l6.53 6.53a4.8 4.8 0 01-.35 6.71z"}))}},67535:(e,t,a)=>{a.d(t,{A:()=>l});var n=a(65043);function r(){return r=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)({}).hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},r.apply(null,arguments)}const l=function(e){return n.createElement("svg",r({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 100 100"},e),n.createElement("path",{d:"M76.1 16.42c-.81 0-23.86 4.63-43.07 8.52a13.27 13.27 0 01-1.48.16c-4.6.39-15.38 1.3-15.38 16.56 0 9.6 4.68 14.68 9.42 16.42l.06 17.67a7.78 7.78 0 007.5 7.83c2.93 0 9.79 0 9.79-5.08v-.14L40.93 58h5.2c.65.15 3.4.84 6.55 1.62 20.32 5.05 22.75 5.6 23.26 5.6 7.37 0 12.72-10.19 12.72-24.28 0-14.22-5.28-24.52-12.56-24.52zM46 55a30.82 30.82 0 01-3.85-14.81 30.46 30.46 0 013.75-14.67l-.16-.08c8.34-1.68 16.93-3.4 22.86-4.57-3.17 3.82-5.32 10.3-5.65 17.91 0 .68-.05 1.37-.05 2.07v2c.31 7.34 2.31 13.63 5.29 17.51-4.8-1.18-10.77-2.66-14.84-3.68C46.53 55 46.53 55 46.3 55zm30.17-35.58c5.33.09 9.49 9.49 9.49 21.48v.1c0 11.85-4.22 21.15-9.64 21.24-.5-.08-2.5-.55-5.2-1.21-2.48-2.29-4.46-6.39-5.54-11.46 3.08-.09 5.48-3.92 5.48-8.8s-2.38-8.68-5.44-8.77c1.14-5.22 3.25-9.4 5.86-11.6 2.73-.57 4.55-.92 4.99-.98zm-11.12 14h.12c2.22 0 4.09 3.34 4.09 7.3s-1.87 7.31-4.09 7.31H65a41.13 41.13 0 01-.58-5.34v-3.77a43.13 43.13 0 01.63-5.46zm-31.9 47.16a4.8 4.8 0 01-4.5-4.83l-.06-17.84 9.29-.37 2.06 21c-.08 1.81-3.66 2.04-6.79 2.04zM39.28 55a1.51 1.51 0 00-1.11.49v.05l-10 .4a1.4 1.4 0 00-.67-.41c-1.39-.36-8.29-2.7-8.29-13.86 0-12.5 8.22-13.19 12.63-13.57a15.6 15.6 0 001.83-.21l10.43-2.12a31.71 31.71 0 00-3.46 14.41A32.29 32.29 0 0044.28 55z"}))}},6356:(e,t,a)=>{a.d(t,{A:()=>l});var n=a(65043);function r(){return r=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)({}).hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},r.apply(null,arguments)}const l=function(e){return n.createElement("svg",r({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 100 100"},e),n.createElement("path",{d:"M25.98 73.62a9.68 9.68 0 009.45 9.88h29.15a9.68 9.68 0 009.44-9.88V30.2h-48zm3-40.42h42v40.42a6.68 6.68 0 01-6.44 6.88H35.43a6.68 6.68 0 01-6.45-6.88z"}),n.createElement("path",{d:"M39.12 74.54a1 1 0 001-1V39.2a1 1 0 00-2 0v34.34a1 1 0 001 1zm10.77 0a1 1 0 001-1V39.2a1 1 0 00-2 0v34.34a1 1 0 001 1zm10.78 0a1 1 0 001-1V39.2a1 1 0 00-2 0v34.34a1 1 0 001 1zm15.17-50.29h-14a.92.92 0 00-.12-.53l-4-6.73a1 1 0 00-.86-.49H43.14a1 1 0 00-.86.49l-4 6.73a.92.92 0 00-.12.53h-14a1.5 1.5 0 000 3h51.68a1.5 1.5 0 000-3zM43.71 18.5H56.3l3.4 5.75H40.32z"}))}}}]);
//# sourceMappingURL=793.78fbaf21.chunk.js.map