window.onload = function() {
  var versionTextElement = document.querySelector('span.version-text');
  if (versionTextElement) {
    versionTextElement.parentNode.removeChild(versionTextElement);
  }
  
  
  var settingWrapperElements = document.querySelectorAll('div.setting-wrapper');
  settingWrapperElements.forEach(function(element) {
    if (element.textContent.includes('关注公众号【假装大佬】') && element.textContent.includes('加入TG频道【假装大佬】')) {
      element.parentNode.removeChild(element);
    }
  });
  
  
  
      var aElement = document.querySelector('a[href="https://github.com/hectorqin/reader"]');
  if (aElement) {
    aElement.href = "https://bbs2.sp-fans.com";
  }
  
    var navigationTitleElement = document.querySelector('div.navigation-title');
  if (navigationTitleElement && navigationTitleElement.textContent.includes(' 阅读 ')) {
    navigationTitleElement.textContent = navigationTitleElement.textContent.replace(' 阅读 ', '小圈子社区');
  }    
  
  var navigationTitleElement = document.querySelector('div.setting-title');
  if (navigationTitleElement && navigationTitleElement.textContent.includes(' 其它 ')) {
    navigationTitleElement.textContent = navigationTitleElement.textContent.replace(' 其它 ', '社区');
  }

  function replaceText(node) {
    if (node.nodeType === 3) {
      node.data = node.data.replace(/清风不识字，何故乱翻书/g, '小说动漫阅读板块');
    //   node.data = node.data.replace(/关注公众号【假装大佬】/g, '关注小圈文化论坛');
    } else {
      for (var i = 0; i < node.childNodes.length; i++) {
        replaceText(node.childNodes[i]);
      }
    }
  }
  replaceText(document.body);

// 把这个标签<div data-v-4bab71b0="" class="title-btn"> 书海 </div>替换为<div data-v-4bab71b0="" href="https://bbs2.sp-fans.com" class="title-btn"> 返回论坛 </div><div data-v-4bab71b0="" class="title-btn"> 书海 </div>

}
