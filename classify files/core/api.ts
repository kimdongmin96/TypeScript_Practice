class Api {
    ajax: XMLHttpRequest;
    url: string;
  
    constructor(url: string) {
      this.ajax = new XMLHttpRequest();
      this.url = url;
    }
  
    getRequest<AjaxResponse>(): AjaxResponse {
      this.ajax.open('GET', this.url, false);
      this.ajax.send();
  
      return JSON.parse(this.ajax.response);
    }
  }
  
  class NewsFeedApi extends Api {
    getData(): NewsFeed[] {
      return this.getRequest<NewsFeed[]>();
    }
  }
  
  class NewsDetailApi extends Api {
    getData(): NewsDetail {
      return this.getRequest<NewsDetail>();
    }
  }