import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {  RouterModule, Routes } from '@angular/router';
import { ActiveChatComponent } from './active-chat/active-chat.component';
import { NewChatComponent } from './new-chat/new-chat.component';
import { AllChatComponent } from './all-chat/all-chat.component';
import { PrevChatComponent } from './prev-chat/prev-chat.component';


const route: Routes = [
  { path: 'chat/new', component: NewChatComponent }, 
  { path: 'chat/active', component: ActiveChatComponent }, 
  { path: 'chat/previous', component: PrevChatComponent }, 
  { path: 'chat/all', component: AllChatComponent }, 
]

@NgModule({
  declarations: [
    ActiveChatComponent,
    NewChatComponent,
    AllChatComponent,
    PrevChatComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(route)

  ]
})
export class ChatModule { }
