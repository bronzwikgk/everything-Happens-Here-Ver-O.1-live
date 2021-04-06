
class ActionController extends ActionEvent {
    constructor(view,model, actionEvent) {
        super()
        this.model = model
        this.view = view
        this.actionEvent = actionEvent;
        this.bufferRange = '';
      //  this.createListeners(document);
        //this.activeListerners = this.createListeners(window);
        //console.log("Listeners",this.activeListerners);
        //   window.addEventListener('change', e => this.emit('change', e));
        //window.addEventListener('event', e => this.emit('click', e))
        document.addEventListener('mouseenter', e => this.emit('handleEvent', e));
        document.addEventListener('readystatechange', e => this.emit('handleEvent', e));
        document.addEventListener('DOMContentLoaded', e => this.emit('handleEvent', e));
        document.addEventListener('mouseleave', e => this.emit('handleEvent', e));
        document.addEventListener('mouseout', e => this.emit('handleEvent', e));
        window.addEventListener('load', e => this.emit('handleEvent', e));
        window.addEventListener('beforeunload', e => this.emit('handleEvent', e));
        window.addEventListener('hashchange', e => this.emit('handleEvent', e));
        window.addEventListener('popstate', e => this.emit('handleEvent', e));
        window.addEventListener('mouseover', e => this.emit('handleEvent', e));
        window.addEventListener('storage', e => this.emit('handleEvent', e));
        window.addEventListener('click', e => this.emit('handleEvent', e));
        window.addEventListener('keydown', e => this.emit('handleEvent', e));
        window.addEventListener('keypress', e => this.emit('handleEvent', e));
        window.addEventListener('keyup', e => this.emit('handleEvent', e));

    }
    handleEvent(event) {
      
      //  console.log(event.type)
        switch (event.type) {
            case 'load':
                 // console.log(event.type)

                this.onRouteChange(event);
                //  console.log("click", event.type, event.target)
                break;
            case 'beforeunload':
               // console.log(event.type)

                this.onRouteChange(event);
                //  console.log("click", event.type, event.target)
                break;
            case 'readystatechange':
             //   console.log(event.type)
                this.onRouteChange(event);
                //  console.log("click", event.type, event.target)
                break;
            case 'DOMContentLoaded':
               // console.log(event.type)
                this.onRouteChange(event);
                //  console.log("click", event.type, event.target)
                break;
            case 'hashchange':
                this.onRouteChange(event);
                //  console.log("click", event.type, event.target)
                break;
            case 'click':
               
                this.onClick(event);
                //  console.log("click", event.type, event.target)
                break;
            case 'submit':
                this.onSubmit(event);
            case 'selectstart':
                //console.log("selectstart", event.type, event.target)
                break;
            case 'keydown':
              
                this.onKeyDown(event)
              // console.log("keydown", event.type,event.key, event.target)
                break;
            case 'keypress':
                // this.emit('keypress', event)
                this.onKeyPress(event)
               // console.log("keypress", event.type,event.key ,event.target)
                break;
            case 'keyup':
                this.onKeyUp(event)
                //  console.log("message", event.type, event.target)
                break;
            case 'mouseover':
                this.onMouseOver(event);
                //console.log("mouseover", event.type, event.target)
                break;
            case 'mouseenter':
                this.onMouseEnter(event);
                //console.log("mouseover", event.type, event.target)
                break;
            case 'mouseleave':
                this.onMouseLeave(event);
                //console.log("mouseover", event.type, event.target)
                break;
            case 'mouseout':
                this.onMouseLeave(event);
                //console.log("mouseover", event.type, event.target)
                break;
            case 'storage':
                console.log("storage", event.type, event.target)
                console.log(Object.keys(actionStorageInstance.entity))

                break;
            default:
            // console.log("I don't know such values",event.type);
        }
        // console.log("handler", event.type, event.target.getAttribute('name'))
        //  window.postMessage()

        //filter the registerd events paired with Target

    }
    onRouteChange(e) {
      //  console.log("event occoured",e.type);
        var routeKeyword;
        if (document.location.hash) {
           // console.log("it's a hash Change", document.location.hash.substring(1));
            routeKeyword = document.location.hash.substring(1);
        } else if (document.location.search) {
          //  console.log("it's a search Change", document.location.search.substring(1));
            routeKeyword = document.location.search.substring(1);
        } else {
           // console.log("no idea");
        }

      //  const hashLocation = window.location.hash.substring(1);
      
        if (routeKeyword) {
           // console.log(hashLocation);
            var routeModel = operate.findMatchingInArrayOfObject(actionSpaceViewModel, 'keyword', routeKeyword, 'values');
           // console.log(routeModel[0].model, this.view._actionView)
            //console.log(routeModel)
            if (routeModel.length !=0) {
                this.view.replaceChild([routeModel[0].model, this.view._actionView.entity]);
            } else {
                console.log('no route found');
            }  
        }
    }
    formSubmit(event) {
        if (!isValid)
            event.preventDefault();
        console.log('Target ID :- ' + e.getAttribute('id'));
        switch (event.getAttribute('id')) {
            case 'get':
                Sync.get(e); console.log(event.target); break;
            case 'set':
                Sync.send(e); console.log(event.target); break;
        }
    }
    onKeyPress(entity) {//used for typing
        var match = {};
        var currentSelection = window.getSelection();
        var currentCaret = currentSelection.anchorOffset;
        //console.log("key pressed",entity.target,)
     //  console.log(entity.code + ":::: key pressed");
     
        
        if (entity.key) {
        
           // console.log(this.bufferRange, entity.code);
        
           // this.bufferRange = this.bufferRange + entity.code;
        
            //console.log(this.bufferRange, entity.code);
        
            match['byCode'] = operate.find(replaceKeyPress, entity.code, 'keys');
            match['byKey'] = operate.find(replaceKeyPress, entity.key, 'keys');
          
            
            if (match['byCode'].length == 0 && match['byKey'].length == 0) {
               //console.log("No match", match, match.length, entity.code)
                entity.preventDefault(entity);
                var appendingBuffer = entity.key;
               // console.log("appending ", entity.key)
               
            } else {
                if (match['byCode'].length > 0) {
                    entity.preventDefault(entity);
                    var replaceContent = replaceKeyPress[entity.code]['content'];

                } else if (match['byKey'].length > 0) {
                    entity.preventDefault(entity);
                    var replaceContent = replaceKeyPress[entity.key]['content'];
                }
                
                
            console.log(replaceContent)

                var appendingBuffer = replaceContent;
              
            }
            console.log("appending ", appendingBuffer, appendingBuffer.length, currentSelection,entity.target)
            var response = currentSelection.anchorNode.data.substr(0, currentSelection.anchorOffset) + appendingBuffer + currentSelection.anchorNode.data.substr(currentSelection.anchorOffset);
            currentSelection.anchorNode.data = response;
            //console.log(response);
            Caret.moveCaret(window, currentCaret + 1);
          
            
        }
        
    }
    onKeyDown(entity) { //other stuff
        var match;
        //console.log("key pressed",entity.target,)
        // console.log(entity.key + ":::: key pressed");
       // entity.preventDefault(entity);
        // if (entity.key) {

        //     //  console.log("bufferRange", this.bufferRange);
        //     var autoSuggestWindow = window['autoSuggest'];
        //     if (entity.keyCode == 32) {
        //        //   console.log('space bar found',this.bufferRange);
        //         if (this.bufferRange.length > 0) {
        //             this.bufferRange = '';
        //         }
        //         if (autoSuggestWindow.style.display == 'block') {
        //             autoSuggestWindow.style.display = 'none';

        //         }
        //     } else {
        //         this.bufferRange = this.bufferRange + entity.key;
        //         match = operate.find(hotKeyList, this.bufferRange, 'keys');
        //         //   console.log("match Found", this.bufferRange, match);

        //         if (autoSuggestWindow.style.display == 'block') {
        //             autoSuggestWindow.style.display = 'none';
        //         }
        //     }
        //     if (entity.keyCode == 9) {


        //         // console.log("tab pressed", this.bufferRange);
        //     }

        //     //  console.log(match)

        //     if (operate.isUseless(match) === false && match.length > 0) {


        //         var autoSuggestWindow = window['autoSuggest'];
        //         var caretViewCordinates = Caret.getCaretCoordinates();
        //         // console.log(autoSuggestWindow, caretViewCordinates['y']);
        //         autoSuggestWindow.style.left = caretViewCordinates['x'] + 'px';
        //         autoSuggestWindow.style.top = caretViewCordinates['y'] + 20 + 'px';
        //         autoSuggestWindow.style.display = 'block';
        //     }
        //     // console.log("key pressed", Caret.getCaretCoordinates(), Object.keys(hotKeyList));


        // }

    }
    onKeyUp(entity) {
       // console.log("key was up")
    }
    onClick(event) {
        /**
         * check if the target entity has any click or data - command set, if yes, then process it.
         */
        console.log("Clicked" + event.target.classList);
     //   event.preventDefault();
        if (event.target.hasAttribute("data-command")) {
  
            var dataCommand = event.target.getAttribute('data-command');
//          console.log(dataCommandT);
            var commandJson = JSON.parse(dataCommand);
            console.log("Command " + commandJson[0].command);
            switch (commandJson[0].command) {
                case "new":
                    console.log("new")
                    this.new1(event); break;
                case 'google':
                    Authorization.oAuth(event, 'json'); break;
                //sheet
                
                //File System
                case 'FSOpenDirectory':
                    processFS.OpenDirectory(event); break;
                case 'FSNew':
                    processFS.NewFile(event); break;
                case 'FSOpen':
                    processFS.readFile(event); break;
                case 'FS_Save':
                    processFS.saveFile(event); break;
                case 'FS_SaveAs':
                    processFS.saveAsFile(event); break;
                // case 'file':
                //     this.file(event);break;
                // case 'caret':
                //     this.caret(event);break;
                // local storage
             
                case 'save':
                    this.save(event); break;
                case 'cloud':
                    this.load(event); break;
                case 'download':
                    this.download(event); break;
                case 'delete':
                    this.delete(event); break;
                case 'logout':
                    this.logout(event); break;
                case 'keyup':
                    this.onKeyUp(event); break;
                case 'mouseover':
                    this.onMouseOver(event); break;
                case 'storage':
                    console.log("storage", event.type, event.target)
                    console.log(Object.keys(actionStorageInstance.entity))
                    break;
                default:
                // console.log("I don't know such values",event.type);
            }
        }
        if (event.target.classList.contains('editable')) {
            // console.log("clickedOn", entity.target.id, entity.target.classList.contains('editable')) // TO check if it's content
            event.target.setAttribute('contentEditable', 'true');
            //entity.target.setAttribute('State', "contentEditable");
        }
        if(event.target.classList.contains('parent')){
            console.log("yo")
            event.target.parentElement.querySelector(".nested").classList.toggle("active");
            event.target.classList.toggle("parent-down");
        }
        if(event.target.id == 'MainHeaderHamburger1'){
            document.getElementById('navigationSection').classList.toggle('hide')
            document.getElementById('navigationSection').classList.toggle('active')  
        }

    }
    onMouseEnter(event){
       // console.log('onMouseEnter',event.target,event.type)
        if (event.target.id) {
            event.target.setAttribute('State', event.type);
           // console.log('onMouseEnter',event.target,event.type)

        }
    }
    onMouseLeave(event){
      //  console.log('onMouseLeave',event.target,event.type)
        if (event.target.id) {
          //  console.log('onMouseLeave',event.target.id,event.type)
            event.target.setAttribute('State', event.type);
            //console.log('onMouseLeave',event.target.id,event.type)

        }
    }
    onMouseOver(event) {
        //console.log('onMouseOver',event.target.id,event.type)
        if (event.target.id) {
           // console.log('onMouseOver',event.target.classList,event.type)
           // event.target.setAttribute('State', event.type);
           // event.target.classList.add('event.type');
        }
        if (event.target.classList.contains('inlineContent')) {
            //event.target.classList.add(event.type);
            event.target.setAttribute('State', event.type);
          //  console.log('onMouseOver',event.target.classList,event.type)
        }
        if (event.target.classList.contains('editable')) {

           // event.target.previousElementSibling.style = 'visibility:visible'

          //  console.log(event.target.previousElementSibling.innerHTML)
            //event.target.previousElementSibling('visibility',true)

            //console.log("yo")
        }
    }
    new1(event) {
        console.log("New One");
       
    }
    save(event) {
        var entityName = ActionView.getTitle();
        console.log(entityName);
        var entityValue = ActionView.getText();
        StorageHelper.saveToStorage(entityName, entityValue);
    }
    load(event) {
        const entityName = window.prompt('Enter name of the Action Story you want to load', '');
        const entitytValue = StorageHelper.getFromStorage(entityName);
        console.log(entityName + ":::::" + entitytValue);
        if (entitytValue !== null) {
            ActionView.updateTitle(entityName);
            ActionView.updateText(entitytValue);
            //   this.view.updateText(entitytValue);
            console.log("Loaded successfully");
        } else {
            alert(entityName + " doesn't exist");
        }
    }
    delete(event) {
        const entityName = window.prompt('Enter name of the Action Story you want to delete', '');
        console.log("entityName:- " + entityName);
        const entitytValue = StorageHelper.getFromStorage(entityName);
        console.log(entityName + ":::::" + entitytValue);
        if (entitytValue !== null) {
            StorageHelper.removeFromStorage(entityName);
            console.log("Deleted successfully");
        } else {
            alert(entityName + " doesn't exist");
        }
    }
    download(event) {
        const entityName = window.prompt('Enter name of the Action Story you want to download', '');
        console.log("entityName:- " + entityName);
        const entitytValue = StorageHelper.getFromStorage(entityName);
        console.log(entityName + ":::::" + entitytValue);
        if (entitytValue !== null) {
            StorageHelper.export(entityName, entitytValue);
            console.log("Downloaded successfully");
        } else {
            alert(entityName + " doesn't exist");
        }
    }
    async logout(event) {
        console.log("Logout");
        event.preventDefault();
        if (localStorage.getItem('LoginEhh' + localStorage.getItem('emailID')) === 'true') {
            localStorage.removeItem('LoginEhh' + localStorage.getItem('emailID'));
            alert('Logged out through ehh');
        } else if (localStorage.getItem('LoginEhhGoogle' + localStorage.getItem('emailID')) === 'true') {
            localStorage.removeItem('LoginEhhGoogle' + localStorage.getItem('emailID'));
            var response = await Credentials.actions(event, "LOGOUT");
            if (!response.error) {
                console.log("You have been logged out successfully");
            }
            alert('Logged out through ehh Google');
        }
        localStorage.removeItem('emailID');
        window.location.href = '../';
    }
}