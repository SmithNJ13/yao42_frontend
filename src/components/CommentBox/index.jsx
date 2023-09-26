import './CommentBox.css'
import React, {useState, useRef} from 'react'
import cn from 'classnames';
import useDynamicHeightField from './useDynamicHeightField';

const initialHeight = 46;

const CommentBox = () => {
const [isExpanded, setIsExpanded] = useState(false);
const [commentValue, setCommentValue] = useState('');

const outerHeight = useRef(initialHeight);
const textRef = useRef(null);
const containerRef = useRef(null);

useDynamicHeightField(textRef, commentValue);


const onExpand = () => {
if (!isExpanded) {
outerHeight.current = containerRef.current.scrollHeight;
setIsExpanded(true);
  }
   }

   const onChange = (e) => {
    setCommentValue(e.target.value);
	}

    const onClose = () => {
        setCommentValue("");
        setIsExpanded(false);
      };

      const onSubmit = (e) => {
        e.preventDefault();
        console.log('send the form data somewhere')
      }

      return (
        <form
        onSubmit={onSubmit}
        ref={containerRef}
        className={cn("comment-box", {
          expanded: isExpanded,
          collapsed: !isExpanded,
                modified: commentValue.length > 0,
        })}
        style={{
          minHeight: isExpanded ? outerHeight.current : initialHeight
        }}
      >
        <div className="header">
      <div className="user">
        <img
          src="avatar/path"
          alt="User avatar"
        />
        <span>User Name</span>
      </div>
    </div>
    <label htmlFor="comment">What are your thoughts?</label>
    <textarea
      ref={textRef}
      onClick={onExpand}
      onFocus={onExpand}
      onChange={onChange}
      className="comment-field"
      placeholder="What are your thoughts?"
      value={commentValue}
      name="comment"
      id="comment"
    />
    <div className="actions">
      <button type="button" className="cancel" onClick={onClose}>
        Cancel
      </button>
      <button type="submit" disabled={commentValue.length < 1}>
        Respond
      </button>
    </div>
      </form>
    );

}

export default CommentBox
