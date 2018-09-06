import Link from 'next/link';
import React from 'react';
import { REQ_ACTION } from './req-action';

export const SET_TABLE = {
  // 设置文章评论
  setCommentWidth(v, _this) {
    let extend = {};
    if (v === '操作') {
      extend = {
        width: 80,
        fixed: 'right',
        render: (text, row) => <a href="###" onClick={REQ_ACTION.handleDelAdminComment.bind(_this, _this, row.id)}>删除</a>
      };
    }
    if (v === 'a_id') {
      extend = {
        width: 50,
        render: (text, row) => (
          <Link as={`/p/${row.a_id}`} href={`/p/${row.a_id}`}>
            <a>{text}</a>
          </Link>
        )
      };
    }
    if (v === 'id') {
      extend = { width: 80, fixed: 'left' };
    }
    if (v === 'msg') {
      extend = { width: 300 };
    }
    if (v === 'user') {
      extend = { width: 80 };
    }
    return { title: v, dataIndex: v, ...extend };
  },
  // 设置用户留言
  setUserCommentWidth(v, _this) {
    let extend = {};
    if (v === 'id') {
      extend = {
        width: 80, fixed: 'left'
      };
    }
    if (v === '操作') {
      extend = {
        width: 80,
        fixed: 'right',
        render: (text, row) => <a href="javascript:;" onClick={REQ_ACTION.handleDelUserComment.bind(_this, _this, row.id)}>删除</a>
      };
    }
    if (v === 'address' || v === 'ip' || v === 'real_ip' || v === 'website') {
      extend = { width: 100 };
    }
    return { title: v, dataIndex: v, ...extend };
  },
  // 设置浏览记录
  setHistoryRecode(v) {
    let extend = {};
    if (v === 'id') {
      extend = {
        width: 80, fixed: 'left'
      };
    }
    if (v === 'account') {
      extend = {
        fixed: 'right'
      };
    }
    return { title: v, dataIndex: v, ...extend };
  },
  // 设置文章增删改查
  setArticle(v, _this) {
    let extend = {};
    if (v === 'id') {
      extend = { width: 80, fixed: 'left' };
    }
    if (v === 'title') {
      extend = {
        render: (text, row) => (
          <Link as={`/adminDetail/${row.id}`} href={`/adminDetail/${row.id}`}>
            <a>{text}</a>
          </Link>
        )
      };
    } else if (v === '操作') {
      extend = {
        width: 80,
        fixed: 'right',
        render: (text, row) => <a href="###" onClick={REQ_ACTION.handleDelArticle.bind(_this, _this, row.id)}>删除</a>
      };
    }
    return { title: v, dataIndex: v, ...extend };
  },
};
