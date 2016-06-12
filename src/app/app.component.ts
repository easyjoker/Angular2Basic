import { Component } from '@angular/core';
//這邊引入的是"應用程式"級的css
import '../../public/css/styles.css';
//裡面定義的是自己的html模板跟css文件。
@Component({
  selector: 'my-app',
  template: require('./app.component.html'),
  styles: [require('./app.component.css')]
})
export class AppComponent { }
