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

      const onSubmit = async (e) => {
        e.preventDefault();
        console.log('commentValue:', commentValue)
        const newComment = {
          comment: commentValue,
          recipe_id: 5, // Replace with the actual recipe ID
          user_id: 6, // Replace with the actual user ID
        };
        try {
          const response = await fetch('https://lap-4-server.onrender.com/comments', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(newComment),
          });
          if (response.ok) {
            console.log('Comment posted successfully!');
            setCommentValue('');
            setIsExpanded(false);
          } else {
            console.error('Failed to post comment:', JSON.stringify(newComment));

          }
        } catch (error) {
          console.error('Error:', error);
        }
      };

     

      
      return (
        <form
          onSubmit={onSubmit}
          ref={containerRef}
          className={cn('comment-box', {
            expanded: isExpanded,
            collapsed: !isExpanded,
            modified: commentValue.length > 0,
          })}
          style={{
            minHeight: isExpanded ? outerHeight.current : initialHeight,
          }}
        >
          <div className="header">
            <div className="user">
              <span>Username</span> {/* Replace with the actual user name */}
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
    };

export default CommentBox
