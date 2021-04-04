let SessionLoad = 1
let s:so_save = &so | let s:siso_save = &siso | set so=0 siso=0
let v:this_session=expand("<sfile>:p")
silent only
cd ~/program/react/hackclubcucek/src
if expand('%') == '' && !&modified && line('$') <= 1 && getline(1) == ''
  let s:wipebuf = bufnr('%')
endif
set shortmess=aoO
badd +46 App.js
badd +53 Navbar.js
badd +3 Home.js
badd +8 Join.js
badd +49 join/Login.js
badd +88 join/Signup.js
badd +14 Footer.js
badd +11 useFetch.js
badd +54 blog/CreateBlog.js
badd +3 Utility.js
badd +1 Messages.js
badd +14 UserProfile.js
badd +47 profile/UserProfileUpdate.js
badd +1 profile/Profile.js
badd +35 navbar/SideDrawer.js
badd +17 blog/RenderPost.js
badd +16 components/UserAvatar.js
badd +38 components/PostCard.js
badd +29 navbar/UserIconMenu.js
badd +116 blog/EditBlogPost.js
badd +34 blog/DeleteConfirmation.js
badd +50 ListPosts.js
badd +0 blog/ViewPost.js
argglobal
%argdel
edit blog/ViewPost.js
set splitbelow splitright
set nosplitbelow
set nosplitright
wincmd t
set winminheight=0
set winheight=1
set winminwidth=0
set winwidth=1
argglobal
let s:l = 103 - ((0 * winheight(0) + 22) / 45)
if s:l < 1 | let s:l = 1 | endif
exe s:l
normal! zt
103
normal! 0
tabnext 1
if exists('s:wipebuf') && getbufvar(s:wipebuf, '&buftype') isnot# 'terminal'
  silent exe 'bwipe ' . s:wipebuf
endif
unlet! s:wipebuf
set winheight=1 winwidth=20 winminheight=1 winminwidth=1 shortmess=filnxtToOFc
let s:sx = expand("<sfile>:p:r")."x.vim"
if file_readable(s:sx)
  exe "source " . fnameescape(s:sx)
endif
let &so = s:so_save | let &siso = s:siso_save
doautoall SessionLoadPost
unlet SessionLoad
" vim: set ft=vim :
