import React from 'react';
import { Switch, Route } from 'react-router-dom'
import Home from './components/Home/home'
import Layout from './hoc/layout'
import BookView from './components/Books'
import Login from './containers/admin/login'
import Auth from './hoc/auth'
import User from './components/Admin'
import AddReview from './containers/admin/add';
import EditReview from './containers/admin/edit';
import UserPosts from './components/Admin/userPosts';
import Register from './containers/admin/register';

const Routes = () => {
    return (
        <Layout>
            <Switch>
                <Route path="/" exact component={Auth(Home, null)} />
                <Route path="/login" exact component={Auth(Login, false)} />
                <Route path="/user" exact component={Auth(User, true)} />
                <Route path="/books/:id" exact component={Auth(BookView,null)} />
                <Route path="/user/add" exact component={Auth(AddReview,true)}/>
                <Route path="/user/register" exact component={Auth(Register,true)}/>
                <Route path="/user/edit-post/:id" exact component={Auth(EditReview,true)}/>
                <Route path="/user/user-reviews" exact component={Auth(UserPosts, true)} />

            </Switch>
        </Layout>

            );
        };
        
export default Routes;