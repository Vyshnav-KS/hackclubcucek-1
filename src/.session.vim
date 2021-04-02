let SessionLoad = 1
let s:so_save = &so | let s:siso_save = &siso | set so=0 siso=0
let v:this_session=expand("<sfile>:p")
silent only
cd ~/program/react/hackclubcucek/src
if expand('%') == '' && !&modified && line('$') <= 1 && getline(1) == ''
  let s:wipebuf = bufnr('%')
endif
set shortmess=aoO
badd +41 App.js
badd +79 Navbar.js
badd +3 Home.js
badd +8 Join.js
badd +10 join/Login.js
badd +129 join/Signup.js
badd +14 Footer.js
badd +11 useFetch.js
badd +1 Blog.js
badd +121 blog/CreateBlog.js
badd +2 Utility.js
badd +1 Messages.js
badd +58 blog/ViewBlog.js
badd +14 UserProfile.js
badd +47 profile/UserProfileUpdate.js
badd +36 profile/Profile.js
badd +35 navbar/SideDrawer.js
badd +23 blog/RenderPost.js
badd +6 components/UserAvatar.js
badd +10 components/PostCard.js
badd +15 navbar/UserIconMenu.js
argglobal
%argdel
edit Utility.js
set splitbelow splitright
set nosplitbelow
set nosplitright
wincmd t
set winminheight=0
set winheight=1
set winminwidth=0
set winwidth=1
argglobal
let s:l = 2 - ((1 * winheight(0) + 22) / 45)
if s:l < 1 | let s:l = 1 | endif
exe s:l
normal! zt
2
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
