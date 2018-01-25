if (typeof LANGUAGES === 'undefined') { var LANGUAGES = {} }

LANGUAGES['ch'] = {
  'general': {
    'sections': {
      'home': '首頁',
      'orders': '訂單',
      'drafts': '草稿',
      'checkouts': '結帳管理',
      'products': '商品管理',
      'customers': '顧客管理',
      'reports': '回報',
      'discounts': '折扣',
      'sales-channels': '銷售頻道',
      'channels': '頻道',
      'online_store': '線上商店',
      'buy_button': 'Buy Button',
      'mobile_app': "手機App",
      'pos': "銷售時點情報系統(POS)",
      'apps': "應用程式",
      'settings': "設定",
      'online_preferences': "線上偏好設定",
      'themes': "主題",
      'blogs': "部落格",
      'pages': "頁面",
      'navigation': "導航設定",
      'domains': "區域",
      'inventory': "存貨管理",
      'inventory_transfers': "存貨運輸",
      'collections': "收藏",
      'gift_cards': "禮品卡",
      'files': "檔案管理",
      'taxes': "稅金",
      'checkout': "結帳設定",
      'general': "一般",
      'payments': "付款設定",
      'shipping': "物流設定",
      'notifications': "通知",
      'plan': "計劃",
      'account': "帳戶",
    },

    'search': {
      'placeholder': '搜尋',
    },

    'buttons': {
      'export': '出口',
      'import': '進口',
      'print': '列印',
      'save': '儲存',
      'duplicate': '複製',
      'edit': '編輯',
      'cancel': '取消',
      'change': '變更',
      'destroy': '刪除',
      'post': '投稿',
      'filter': '篩選',
      'deactivate': "無效化",
    }
  },

  'modal': {
    'titles': {
     'capture-payment': "取得付款",
    },
  },

  'shared': {
    'customer-card': {
      'customer': '顧客',
      'shipping-address': '配送地址',
      'billing-address': '帳單地址',
      'no-address-set': '地址尚未註冊',
      'same-as-shipping-address': "同配送地址",
      'accepts-marketing': "接受廣告郵件",
      'has-an-account': "已有帳號",
      'no-account': "沒有帳號",
      'contact': "聯絡我們",
      'view-map': "查看地圖",
    },
  },

  'home-index': {
    'cards': {
      'api_buy_button_create_first_embed_card': '',
      'multi_image_buy_button_announcement_card': '',
    },

    'today-features': {
      "todays-total-sales": "本日銷售",
      "todays-visits": "本日訪客數",
      "todays-orders": "本日訂單數",
      "view-summary": "查看摘要",
    },

    'titles': {
      'total-sales': "總銷售",
      'top-products': "熱銷商品",
    },

    'buttons': {
      'all-channels': "所有頻道",
      'online-store': "線上商店",
      'view-order': "查看訂單",
      'view-orders': "查看訂單",
      'create-button': "創建按鈕",
      'create-buy-button': "創建Buy Button",
      'learn-more': "閱讀更多"
    }
  },

  'products-index': {
    'table': {
      'tabs': {
        'all-products': "所有商品",
      },
    },

    'buttons': {
      'add-product': "新增商品",
    },
  },

  'orders-index': {
    'table': {
      'tabs': {
        'all-orders': "所有訂單",
        'open': "開啟訂單",
        'unfulfilled': "未出貨",
        'unpaid': "未付款",
      },

      'columns': {
        'order': '訂單',
        'date': '日期',
        'customer': '顧客',
        'payment-status': '付款狀況',
        'fulfillment-status': '出貨狀況',
        'total': '總計',
      },

      'badges': {
        'fulfilled': '已出貨',
        'unfulfilled': '未出貨',
        'paid': '已付款',
        'pending': '保留',
        'refunded': '已退款',
        'authorized': "已授權"
      },
    },

    'filters': {
      'status': "狀態",
      'credit-card': "信用卡",
      'customer': "顧客",
      'payment-status': "付款狀況",
      'fulfillment-status': "出貨狀況",
      'tagged-with': "附有標籤",
      'risk-level': "風險級別",
    },

    'buttons': {
      'create-order': "創建訂單",
    },
  },

  'orders-show': {
    'buttons': {
      'print': "列印",
      'cancel-order': "取消訂單",
      'archive': "訂單歸檔",
      'view-order-status-page': "查看訂單狀況",
      'capture-payment': "取得付款",
      'restock': "補貨中",
      'fulfill-items': "已出貨",
      'resend-email': "重發電子郵件",
      'mark-as-paid': "已付款",
    },

    'titles': {
      'order-details': '訂單資訊',
      'conversion-details': '轉換資訊',
      'unfulfilled': '未出貨',
      'accept-payment': '接受付款',
      'fulfill-items': '出貨',
      'risk-level': '風險級別',
      'customer': '顧客',
      'tags': '標籤',
      'order-contact': '聯絡地址',
      'timeline': '時間軸',
      'payment-pending': '待付款',
    },

    'texts': {
      'show-comments': "顯示評論",
    },
  },

  'checkouts-index': {
    'table': {
      'tabs': {
        'all-checkouts': "所有結帳訂單",
      },

      'columns': {
        'checkout': '結帳順序',
        'date': '日期',
        'placed-by': '用戶',
        'email-status': '電子郵件傳送狀態',
        'recovery-status': '挽回狀態',
        'total': '總計',
      },

      'badges': {
        'sent': '已寄出',
        'scheduled': '已排定',
        'recovered': '挽回成功',
        'not-recovered': '挽回失敗',
        'not-sent': '未寄出',
      },
    },
  },

  'checkouts-show': {
    'buttons': {
      'send-a-cart-recovery-email': '寄送挽回電郵'
    },
    'titles': {
      'checkout-details': '結帳細節',
      'additional-details': '其他細節',
      'conversion-details': '轉換細節',
    },
  },

  'customers-show': {
    'titles': {
      'recent-orders': "近期訂單",
      'default-address': "默認地址",
      'contact': "聯絡",
    },
  },

  'draft-orders-index': {
    'buttons': {
      'create-order': '創建訂單'
    },

    'empty': {
      'title': '創建訂單/發票',
      'subtitle': '您可以通過電話下單，透過電子郵件寄發票和收款。'
    }
  },

  'draft': {
    'buttons': {
      'save-draft-order': '儲存訂單',
      'browse-products': "搜尋商品",
      'add-custom-item': "新增客製化項目",
      'view-all-tags': "查看所有標籤",
      'add-discount': "新增折扣",
      'add-shipping': "新增運費",
      'taxes': "稅金",
      'email-invoice': "電子郵件寄送發票",
      'mark-as-paid': "標示為已付款",
      'mark-as-pending': "標示為待處理",
      'pay-with-credit-card': "信用卡付款",
    },

    'titles': {
      'order-details': '訂單細節',
      'find-or-create-a-customer': '搜尋/創建顧客',
      'email-invoice': '電子郵件寄送發票',
      'accept-payment': '接受付款',
      'timeline': '時間軸',
      'tags': '標籤',
    },

    'texts': {
      'show-comments': "顯示評論",
    },
  },

  'settings-payments': {
    'titles': {
      'accept-payments': "接受付款",
      'payment-authorization': "授權付款方式",
      'accept-credit-cards': "接受信用卡付款",
      'alternative-payments': "其他付款方法",
      'manual-payments': "銀行轉帳、貨到付款、自訂付款方式",
    },
  },

}
