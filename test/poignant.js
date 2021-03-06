// poignant.yml
import test from 'ava';
import textile from '../src';

test( 'poignant:1', function ( t ) {
  let tx = "h3. False\n\n\
!<i/blix-neg.gif(Shape of a cat.)!\n\n\
_The cat Trady Blix.  Frozen in emptiness.  Immaculate whiskers rigid.  Placid eyes of lake.  Tail of warm icicle.  Sponsored by a Very Powerful Pause Button._\n\n\
The darkness surrounding Blix can be called *negative space*.  Hang on to that phrase. Let it suggest that the emptiness has a negative connotation.  In a similar way, @nil@ has a slightly sour note that it whistles.\n\n\
Generally speaking, everything in Ruby has a positive charge to it.  This spark flows through strings, numbers, regexps, all of it.  Only two keywords wear a shady cloak: @nil@ and @false@ draggin us down.\n\n\
You can test that charge with an @if@ keyword.  It looks very much like the @do@ blocks we saw in the last chapter, in that both end with an @end@.\n\n\
<pre>\n\
  if plastic_cup\n\
    print \"Plastic cup is on the up 'n' up!\"\n\
  end\n\
</pre>\n\n\
If @plastic_cup@ contains either @nil@ or @false@, you won't see anything print to the screen.  They're not on the @if@ guest list.  So @if@ isn't going to run any of the code it's protecting.\n\n\
But @nil@ and @false@ need not walk away in shame.  They may be of questionable character, but @unless@ runs a smaller establishment that caters to the bedraggled. The @unless@ keyword has a policy of only allowing those with a negative charge in. Who are: @nil@ and @false@.\n\n\
<pre>\n\
  unless plastic_cup\n\
    print \"Plastic cup is on the down low.\"\n\
  end\n\
</pre>\n\n\
You can also use @if@ and @unless@ at the end of a single line of code, if that's all that is being protected.\n\n\
<pre>\n\
  print \"Yeah, plastic cup is up again!\" if plastic_cup\n\
  print \"Hardly. It's down.\" unless plastic_cup\n\
</pre>\n\n\
Now that you've met @false@, I'm sure you can see what's on next.";
  t.is( textile.convert( tx ),
    "<h3>False</h3>\n\
<p><img align=\"left\" src=\"i/blix-neg.gif\" title=\"Shape of a cat.\" alt=\"Shape of a cat.\" /></p>\n\
<p><em>The cat Trady Blix.  Frozen in emptiness.  Immaculate whiskers rigid.  Placid eyes of lake.  Tail of warm icicle.  Sponsored by a Very Powerful Pause Button.</em></p>\n\
<p>The darkness surrounding Blix can be called <strong>negative space</strong>.  Hang on to that phrase. Let it suggest that the emptiness has a negative connotation.  In a similar way, <code>nil</code> has a slightly sour note that it whistles.</p>\n\
<p>Generally speaking, everything in Ruby has a positive charge to it.  This spark flows through strings, numbers, regexps, all of it.  Only two keywords wear a shady cloak: <code>nil</code> and <code>false</code> draggin us down.</p>\n\
<p>You can test that charge with an <code>if</code> keyword.  It looks very much like the <code>do</code> blocks we saw in the last chapter, in that both end with an <code>end</code>.</p>\n\
<pre>\n\
  if plastic_cup\n\
    print \"Plastic cup is on the up 'n' up!\"\n\
  end\n\
</pre>\n\
<p>If <code>plastic_cup</code> contains either <code>nil</code> or <code>false</code>, you won&#8217;t see anything print to the screen.  They&#8217;re not on the <code>if</code> guest list.  So <code>if</code> isn&#8217;t going to run any of the code it&#8217;s protecting.</p>\n\
<p>But <code>nil</code> and <code>false</code> need not walk away in shame.  They may be of questionable character, but <code>unless</code> runs a smaller establishment that caters to the bedraggled. The <code>unless</code> keyword has a policy of only allowing those with a negative charge in. Who are: <code>nil</code> and <code>false</code>.</p>\n\
<pre>\n\
  unless plastic_cup\n\
    print \"Plastic cup is on the down low.\"\n\
  end\n\
</pre>\n\
<p>You can also use <code>if</code> and <code>unless</code> at the end of a single line of code, if that&#8217;s all that is being protected.</p>\n\
<pre>\n\
  print \"Yeah, plastic cup is up again!\" if plastic_cup\n\
  print \"Hardly. It's down.\" unless plastic_cup\n\
</pre>\n\
<p>Now that you&#8217;ve met <code>false</code>, I&#8217;m sure you can see what&#8217;s on next.</p>", tx );
});

