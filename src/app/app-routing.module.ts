import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PostListComponent } from './posts/post-list/post-list.component';
import { PostListResolver } from './_resolvers/post-list.resolver';
import { ActivityForecastListComponent } from './activities/activity-list/activity-forecast-list.component';
import { ActivityListResolver } from './_resolvers/activity-list.resolver';
import { ThemesOfWeekComponent } from './themes/themes-of-week/themes-of-week.component';
import { MessageListResolver } from './_resolvers/message-list.resolver';
import { SociaMediaTypeListResolver } from './_resolvers/social-media-type-list.resolver';
import { ThemeListComponent } from './themes/theme-list/theme-list.component';
import { MessageResolver } from './_resolvers/message.resolver';
import { ThemeFormComponent } from './themes/theme-form/theme-form.component';
import { SociaMediaPostListResolver } from './_resolvers/social-media-post-list.resolver';
import { SocialMediaPostListComponent } from './social-media/social-media-post-list/social-media-post-list.component';
import { SocialMediaInputComponent } from './social-media/social-media-input/social-media-input.component';
import { AuthGuard } from './_guards/auth.guard';
import { RoleGuard } from './_guards/role.guard';
import { AddSocialMediaPostComponent } from './social-media/add-social-media-post/add-social-media-post.component';

const appRoutes: Routes = [
  {
    path: 'last-7-day-post-list',
    component: PostListComponent,
    resolve: { posts: PostListResolver },
  },
  {
    path: 'next-7-day-activity-list',
    component: ActivityForecastListComponent,
    resolve: { activities: ActivityListResolver },
    canActivate: [AuthGuard, RoleGuard],
    data: {
      roles: ['Viewer', 'Contributor']
    }
  },
  {
    path: 'themes-of-the-week',
    runGuardsAndResolvers: 'always',
    component: ThemesOfWeekComponent,
    resolve: { themes: MessageListResolver },
    canActivate: [AuthGuard, RoleGuard],
    data: {
      roles: ['Viewer', 'Contributor']
    }
  },
  {
    path: 'social-media-list',
    component: SocialMediaPostListComponent,
    resolve: { socialmedia: SociaMediaPostListResolver, socialmediatype: SociaMediaTypeListResolver },
    canActivate: [AuthGuard, RoleGuard],
    data: {
      roles: ['Viewer', 'Contributor']
    },
    runGuardsAndResolvers: 'always'
  },
  {
    path: 'social-media-input',
    component: SocialMediaInputComponent,
    resolve: { socialmedia: SociaMediaPostListResolver },
    canActivate: [AuthGuard, RoleGuard],
    data: {
      roles: ['Contributor']
    },
    runGuardsAndResolvers: 'always'
  },
  {
    path: 'social-media/new',
    component: AddSocialMediaPostComponent,
    canActivate: [AuthGuard, RoleGuard],
    data: {
      roles: ['Contributor']
    },
    runGuardsAndResolvers: 'always'
  },
  {
    path: 'themes',
    component: ThemeListComponent,
    canActivate: [AuthGuard, RoleGuard],
    data: {
      roles: ['Contributor']
    },
    resolve: { themelist: MessageListResolver },
    runGuardsAndResolvers: 'paramsOrQueryParamsChange'
  },
  {
    path: 'theme/new',
    component: ThemeFormComponent,
    canActivate: [AuthGuard, RoleGuard],
    data: {
      roles: ['Contributor']
    }
  },
  {
    path: 'theme/edit/:id',
    component: ThemeFormComponent,
    canActivate: [AuthGuard, RoleGuard],
    data: {
      roles: ['Contributor']
    },
    resolve: { theme: MessageResolver }
  },
  {
    path: '',
    redirectTo: 'last-7-day-post-list',
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: 'last-7-day-post-list'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})

export class AppRoutingModule {
}
