/* @flow */
// Code generated by github.com/prisma/graphqlgen, DO NOT EDIT.

import type { GraphQLResolveInfo } from 'graphql'
import type { Post, User } from './prisma-client'
import type { Context } from '../types'

// Types for Query
export const Query_defaultResolvers = {}

export interface Query_Args_FilterPosts {
  searchString: string | null;
}

export interface Query_Args_Post {
  id: string;
}

export type Query_Feed_Resolver = (
  parent: {},
  args: {},
  ctx: Context,
  info: GraphQLResolveInfo,
) => Post[] | Promise<Post[]>

export type Query_FilterPosts_Resolver = (
  parent: {},
  args: Query_Args_FilterPosts,
  ctx: Context,
  info: GraphQLResolveInfo,
) => Post[] | Promise<Post[]>

export type Query_Post_Resolver = (
  parent: {},
  args: Query_Args_Post,
  ctx: Context,
  info: GraphQLResolveInfo,
) => Post | null | Promise<Post | null>

export interface Query_Resolvers {
  feed: (
    parent: {},
    args: {},
    ctx: Context,
    info: GraphQLResolveInfo,
  ) => Post[] | Promise<Post[]>;

  filterPosts: (
    parent: {},
    args: Query_Args_FilterPosts,
    ctx: Context,
    info: GraphQLResolveInfo,
  ) => Post[] | Promise<Post[]>;

  post: (
    parent: {},
    args: Query_Args_Post,
    ctx: Context,
    info: GraphQLResolveInfo,
  ) => Post | null | Promise<Post | null>;
}

// Types for Post
export const Post_defaultResolvers = {
  id: (parent: Post) => parent.id,
  createdAt: (parent: Post) => parent.createdAt,
  updatedAt: (parent: Post) => parent.updatedAt,
  published: (parent: Post) => parent.published,
  title: (parent: Post) => parent.title,
  content: (parent: Post) =>
    parent.content === undefined ? null : parent.content,
}

export type Post_Id_Resolver = (
  parent: Post,
  args: {},
  ctx: Context,
  info: GraphQLResolveInfo,
) => string | Promise<string>

export type Post_CreatedAt_Resolver = (
  parent: Post,
  args: {},
  ctx: Context,
  info: GraphQLResolveInfo,
) => string | Promise<string>

export type Post_UpdatedAt_Resolver = (
  parent: Post,
  args: {},
  ctx: Context,
  info: GraphQLResolveInfo,
) => string | Promise<string>

export type Post_Published_Resolver = (
  parent: Post,
  args: {},
  ctx: Context,
  info: GraphQLResolveInfo,
) => boolean | Promise<boolean>

export type Post_Title_Resolver = (
  parent: Post,
  args: {},
  ctx: Context,
  info: GraphQLResolveInfo,
) => string | Promise<string>

export type Post_Content_Resolver = (
  parent: Post,
  args: {},
  ctx: Context,
  info: GraphQLResolveInfo,
) => string | null | Promise<string | null>

export type Post_Author_Resolver = (
  parent: Post,
  args: {},
  ctx: Context,
  info: GraphQLResolveInfo,
) => User | Promise<User>

export interface Post_Resolvers {
  id: (
    parent: Post,
    args: {},
    ctx: Context,
    info: GraphQLResolveInfo,
  ) => string | Promise<string>;

  createdAt: (
    parent: Post,
    args: {},
    ctx: Context,
    info: GraphQLResolveInfo,
  ) => string | Promise<string>;

  updatedAt: (
    parent: Post,
    args: {},
    ctx: Context,
    info: GraphQLResolveInfo,
  ) => string | Promise<string>;

  published: (
    parent: Post,
    args: {},
    ctx: Context,
    info: GraphQLResolveInfo,
  ) => boolean | Promise<boolean>;

  title: (
    parent: Post,
    args: {},
    ctx: Context,
    info: GraphQLResolveInfo,
  ) => string | Promise<string>;

  content: (
    parent: Post,
    args: {},
    ctx: Context,
    info: GraphQLResolveInfo,
  ) => string | null | Promise<string | null>;

  author: (
    parent: Post,
    args: {},
    ctx: Context,
    info: GraphQLResolveInfo,
  ) => User | Promise<User>;
}

// Types for User
export const User_defaultResolvers = {
  id: (parent: User) => parent.id,
  email: (parent: User) => parent.email,
  name: (parent: User) => (parent.name === undefined ? null : parent.name),
}

export type User_Id_Resolver = (
  parent: User,
  args: {},
  ctx: Context,
  info: GraphQLResolveInfo,
) => string | Promise<string>

export type User_Email_Resolver = (
  parent: User,
  args: {},
  ctx: Context,
  info: GraphQLResolveInfo,
) => string | Promise<string>

export type User_Name_Resolver = (
  parent: User,
  args: {},
  ctx: Context,
  info: GraphQLResolveInfo,
) => string | null | Promise<string | null>

export type User_Posts_Resolver = (
  parent: User,
  args: {},
  ctx: Context,
  info: GraphQLResolveInfo,
) => Post[] | Promise<Post[]>

export interface User_Resolvers {
  id: (
    parent: User,
    args: {},
    ctx: Context,
    info: GraphQLResolveInfo,
  ) => string | Promise<string>;

  email: (
    parent: User,
    args: {},
    ctx: Context,
    info: GraphQLResolveInfo,
  ) => string | Promise<string>;

  name: (
    parent: User,
    args: {},
    ctx: Context,
    info: GraphQLResolveInfo,
  ) => string | null | Promise<string | null>;

  posts: (
    parent: User,
    args: {},
    ctx: Context,
    info: GraphQLResolveInfo,
  ) => Post[] | Promise<Post[]>;
}

// Types for Mutation
export const Mutation_defaultResolvers = {}

export interface Mutation_Args_SignupUser {
  email: string;
  name: string | null;
}

export interface Mutation_Args_CreateDraft {
  title: string;
  content: string | null;
  authorEmail: string;
}

export interface Mutation_Args_DeletePost {
  id: string;
}

export interface Mutation_Args_Publish {
  id: string;
}

export type Mutation_SignupUser_Resolver = (
  parent: {},
  args: Mutation_Args_SignupUser,
  ctx: Context,
  info: GraphQLResolveInfo,
) => User | Promise<User>

export type Mutation_CreateDraft_Resolver = (
  parent: {},
  args: Mutation_Args_CreateDraft,
  ctx: Context,
  info: GraphQLResolveInfo,
) => Post | Promise<Post>

export type Mutation_DeletePost_Resolver = (
  parent: {},
  args: Mutation_Args_DeletePost,
  ctx: Context,
  info: GraphQLResolveInfo,
) => Post | null | Promise<Post | null>

export type Mutation_Publish_Resolver = (
  parent: {},
  args: Mutation_Args_Publish,
  ctx: Context,
  info: GraphQLResolveInfo,
) => Post | null | Promise<Post | null>

export interface Mutation_Resolvers {
  signupUser: (
    parent: {},
    args: Mutation_Args_SignupUser,
    ctx: Context,
    info: GraphQLResolveInfo,
  ) => User | Promise<User>;

  createDraft: (
    parent: {},
    args: Mutation_Args_CreateDraft,
    ctx: Context,
    info: GraphQLResolveInfo,
  ) => Post | Promise<Post>;

  deletePost: (
    parent: {},
    args: Mutation_Args_DeletePost,
    ctx: Context,
    info: GraphQLResolveInfo,
  ) => Post | null | Promise<Post | null>;

  publish: (
    parent: {},
    args: Mutation_Args_Publish,
    ctx: Context,
    info: GraphQLResolveInfo,
  ) => Post | null | Promise<Post | null>;
}

export interface Resolvers {
  Query: Query_Resolvers;
  Post: Post_Resolvers;
  User: User_Resolvers;
  Mutation: Mutation_Resolvers;
}
